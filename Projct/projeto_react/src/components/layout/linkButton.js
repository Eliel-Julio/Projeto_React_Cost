import { Link } from 'react-router-dom';
import style from './linkButton.module.css';

function LinkButton({to, text}){
    return(
        <Link to={to} className={style.btn}>
            {text}
        </Link>
    )
}
export default LinkButton;