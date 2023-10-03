function LoginForm() {
  return (
    <div>
      <h2>Register</h2>
      <form className="mt-10 p-10 flex flex-col gap-5" action="">
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
      </form>
    </div>
  );
}

export default LoginForm;
