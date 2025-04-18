import styles from './container.module.css';

function Container(props){
    return(
        <div className={`${styles.Container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container