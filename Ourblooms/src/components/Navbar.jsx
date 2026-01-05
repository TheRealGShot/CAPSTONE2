import styles from "../styles/Navbar.module.css"
function Navbar(){
    return(
        <nav className={styles.navbar}>
            <p className="display">Our Blooms</p>
            <ul className={styles.ul}>
                <li className='caption1'>GALLERY</li>
                <li className='caption1'>ABOUT</li>
                <li className='caption1'>CONTACT</li>
            </ul>
        </nav>
    );
}
export default Navbar;