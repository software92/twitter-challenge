import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import { FirebaseError } from 'firebase/app'

import styles from './Join.module.css'

const Join = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void | JSX.Element> => {
    e.preventDefault()

    if (
      loading ||
      Object.values(inputs).includes('') ||
      inputs.password !== inputs.password2 ||
      inputs.name.length < 1
    ) {
      setError('입력한 정보를 확인해주세요')
      return
    }

    try {
      setLoading(true)

      const User = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      )

      await updateProfile(User.user, { displayName: inputs.name })

      console.log('Join result: ', User.user)
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
      <h1>Join</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='이름을 입력하세요'
          value={inputs.name}
          onChange={onChange}
        />
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
        <input
          type='password'
          name='password2'
          id='password2'
          placeholder='비밀번호를 다시 한번 입력하세요'
          value={inputs.password2}
          onChange={onChange}
        />
        <input type='submit' value={loading ? '처리중...' : '가입'} />
      </form>
      {error !== '' && <span className={styles.error}>{error}</span>}
      <div className={styles.switch}>
        <Link to='/login'>로그인</Link>
      </div>
    </section>
  )
}

export default Join
