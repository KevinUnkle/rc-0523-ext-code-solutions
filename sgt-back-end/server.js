import express from 'express';
import pg from 'pg';
import ClientError from './client-error.js';
import errorMiddleware from './error-middleware.js';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

// Returns all rows from the "grades" table
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

// Inserts a new grade into the "grades" table and returns the created grade
app.post('/api/grades', async (req, res, next) => {
  try {
    const student = req.body;
    if (!student.name || !student.course || !student.score) {
      throw new ClientError(400, 'Missing name, course, or score');
    }
    if (
      !Number.isInteger(Number(student.score)) ||
      Number(student.score) < 0 ||
      Number(student.score) > 100
    ) {
      throw new ClientError(400, 'score must be an integer from 0 to 100');
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
    `;
    const params = [student.name, student.course, student.score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// Updates a grade in the "grades" table and returns the updated grade
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const student = req.body;
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    if (!student.name || !student.course || !student.score) {
      throw new ClientError(400, 'Missing name, course, or score');
    }
    if (
      !Number.isInteger(Number(student.score)) ||
      Number(student.score) < 0 ||
      Number(student.score) > 100
    ) {
      throw new ClientError(400, 'score must be an integer from 0 to 100');
    }
    const sql = `
      update "grades"
      set "name" = $1,
      "course" = $2,
      "score" = $3
      where "gradeId" = $4
      returning *
      `;
    const params = [student.name, student.course, student.score, gradeId];
    const result = await db.query(sql, params);
    if (!result.rows.length) {
      throw new ClientError(404, `Unable to find gradeId of ${gradeId}`);
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// Deletes a grade from the "grades" table
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    const sql = `
      delete
        from "grades"
      where "gradeId" = $1
      returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);

    if (!result.rows.length) {
      throw new ClientError(404, `Unable to find gradeId of ${gradeId}`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
