export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Uncontrolled form: ', Object.fromEntries(formData.entries()));
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="userName" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
