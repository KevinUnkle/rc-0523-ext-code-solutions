# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Insert, Select, Update, Delete
- How do you add a row to a SQL table?
  Insert Into statement, specify the table to insert into in double quotes, put the attributes to add in paranthesis, then use the 'value' keyword and subsequently all the values to be added in paranthsis in the order of the specified attributes (this is called a tuple)
- How do you add multiple rows to a SQL table at once?
  by adding multiple tuples, separated by comma
- How do you update rows in a database table?
  with the Update statement, specifying the table name in double quotes, and specifying the columns to be upated in double quotes, importantt to remember to include a where clause to specify the records to be updated, or else every record in the table will be updated!
- How do you delete rows from a database table?
  with the Delete statement, specifyiing the table to delete from in double quotes
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  those statments will affect every single record in the table if you don't use where to specify the records to change
- How do you accidentally delete or update all rows in a table?
  by not using where
- How do you get back the modified row without a separate `select` statement?
  with the returning _ statement, you can also specify the columns you want to return instead of returning all with _

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
