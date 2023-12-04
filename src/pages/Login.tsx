const Login = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('e', e)
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input type='email' name='email' id='email' />
        <input type='password' name='password' id='password' />
        <input type='submit' value='로그인' />
      </form>
    </>
  )
}

export default Login
