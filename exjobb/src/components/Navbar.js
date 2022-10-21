// const { StylesContext } = require("@material-ui/styles")
import styles from "styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = ()=> {
    return(
        <nav className={styles.main__nav}>
            <ul>
                <Link href='/'><a><li>Home</li></a></Link>
                <Link href='/closet'><a><li>Closet</li></a></Link>
                <Link href='/create'><a><li>Create</li></a></Link>
                <Link href='/outfit'><a><li>Outfit</li></a></Link>
            </ul>
        </nav>
    )
} 

export default Navbar