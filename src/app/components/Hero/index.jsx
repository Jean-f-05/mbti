import styles from "./styles.module.scss";
import Button from "../Button/index";
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
            {/* <div className={styles.hero__icons}>
                <Image src="/explorerBg.png" height={100} width={100} alt='explorer icon'></Image>
                <Image src="/healerBg.png" height={100} width={100} alt='healer icon'></Image>
                <Image src="/sageBg.png" height={100} width={100} alt='sage icon'></Image>
                <Image src="/commanderBg.png" height={100} width={100} alt='commander icon'></Image>

            </div> */}
            <Image src={blob} alt='blob' className={styles.hero__icon} height={450} width={450}></Image>

        </section>
    )
}

export default Hero;