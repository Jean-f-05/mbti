import Navbar from './components/Navbar'
import styles from './page.module.scss'

export default function Home() {

  return (
    <>
      <Navbar title='MBTI TEST' />
      <main className={styles.main}>
        <h1>hello</h1>
      </main>
    </>
  )
}
