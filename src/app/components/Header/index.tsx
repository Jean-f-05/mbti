import styles from "./styles.module.scss";

type HeaderProps = {
    text: String
}

const Header = ({ text }: HeaderProps) => {
    return (
        <div className={styles.header__wrapper}>
            <h2 className={styles.header__header} dangerouslySetInnerHTML={{ __html: text }}></h2>
        </div>
    )
}


export default Header;