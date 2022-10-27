import Link from "next/link";
import styles from "styles/Navbar.module.scss";

const Navbar = () => {
    return (
        <section className={styles.top__nav}>
            <div className={styles.meny__logo}>
                <Link href='/'>
                    <img className={styles.logoImg} src="/brandLogo.svg" />
                </Link>
            </div>

            <input id={styles.menu__toggle} type="checkbox" />
            <label className={styles.menu__button__container} htmlFor={styles.menu__toggle}>
                <div className={styles.menu__button}></div>
            </label>

            <ul className={styles.menu}>
                <Link href='/'><li>Home</li></Link>
                <Link href='/closet'><li>Closet</li></Link>
                <Link href='/create'><li>Create</li></Link>
                <Link href='/outfit'><li>Outfits</li></Link>
            </ul>
        </section>
    )
} 

export default Navbar
