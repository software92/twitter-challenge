import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { FirebaseError } from 'firebase/app'

import styles from './Login.module.css'

import { GithubButton } from '../components/SocialButton'

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void | JSX.Element> => {
    e.preventDefault()

    try {
      setLoading(true)
      const result = await signInWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      )

      console.log('login result: ', result.user)
      navigate('/')
    } catch (error) {
      if (error instanceof FirebaseError) {
        // console.log(error.message)
        setError(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.Wrapper}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='이메일을 입력하세요'
          value={inputs.email}
          onChange={onChange}
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='비밀번호를 입력하세요'
          value={inputs.password}
          onChange={onChange}
        />
        <input type='submit' value={loading ? '로그인...' : '로그인'} />
      </form>
      {error !== '' && <span className={styles.error}>{error}</span>}
      <div className={styles.switch}>
        <Link to='/join'>회원 가입</Link>
      </div>

      <GithubButton />
    </section>
  )
}

export default Login
