import { useNavigate } from 'react-router-dom'

import { signInWithPopup } from 'firebase/auth'
import { GithubAuthProvider } from 'firebase/auth'
import { auth } from '../firebase'
import { FirebaseError } from 'firebase/app'

import styles from './SocialButton.module.css'

export const GithubButton = () => {
  const navigate = useNavigate()

  const clickGithub = async () => {
    try {
      const provider = new GithubAuthProvider()
      await signInWithPopup(auth, provider)

      navigate('/')
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.message)
      }
    }
  }

  return (
    <button className={styles.GithubButton} onClick={clickGithub}>
      with Github
    </button>
  )
}
