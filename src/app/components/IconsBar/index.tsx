import styles from "./styles.module.scss"
import Image from 'next/image'

const IconsBar = () => {
    return (
        <div className={styles.icons__wrapper}>
            <Image src="/explorerRound.webp" height={100} width={100} alt='explorer icon'></Image>
            <Image src="/healerRoundA.webp" height={100} width={100} alt='healer icon'></Image>
            <Image src="/sageRound.webp" height={100} width={100} alt='sage icon'></Image>
            <Image src="/commanderRound.webp" height={100} width={100} alt='commander icon'></Image>
        </div>
    )
}

export default IconsBar