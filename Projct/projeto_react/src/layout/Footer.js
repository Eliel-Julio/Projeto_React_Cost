import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import Styles from './Footer.module.css';

function footer(){
    return(
        <footer className={Styles.footer}>
            <ul className={Styles.social_list}>
                <li><a href="#"><FaInstagram/></a></li>
                <li><a href="#"><FaTwitter/></a></li>
                <li><a href="#"><FaFacebook/></a></li>
            </ul>
            <p className={Styles.copy_right}>Copyright &copy; 2023</p>
        </footer>
    )
}

export default footer