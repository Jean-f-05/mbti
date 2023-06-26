import styles from "./styles.module.scss";
import Button from "../../components/Button/index";
import Image from 'next/image'
import blob from "../../../../public/blob5.png"

const Hero = () => {
    return (
        <section className={styles.hero__wrapper}>
            <div className={styles.hero__container}>
                <h1 className={styles.hero__header}>Discover your true Self</h1>
                {/*      <span className={styles.hero__header}>&</span> */}
                <p className={styles.hero__paragraph}>Unlock your potential by completing the MBTI test</p>
                <Button>Take the test!</Button>
            </div>
            <Image src={blob} alt='blob' className={styles.hero__icon} height={450} width={450}></Image>

        </section>
    )
}

export default Hero;