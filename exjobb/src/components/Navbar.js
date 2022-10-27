// const { StylesContext } = require("@material-ui/styles")
import styles from "styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = ()=> {
    return(
        <section className={styles.top__nav}>
            <div>
                Logo here
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
