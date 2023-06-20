import styles from "./styles.module.scss"
import Link from 'next/link'

type ButtonProps = {
    children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
    return (
        <Link className={styles.button__wrapper} href={"/argetlam"}>{children}</Link>
    )
}

export default Button