import Navbar from './components/Navbar'
import Hero from './components/Hero'
import styles from './page.module.scss'

export default function Home() {

  return (
    <>
      <Navbar title='MBTI TEST' />
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  )
}
