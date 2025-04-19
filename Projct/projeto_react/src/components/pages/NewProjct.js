import styles from "./NewProjct.module.css"
import Form from '../project/Form'

function NewProjct(){

    return(
        <div className={styles.newProjctContainer}>
            <h1>Crie seu projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <Form/>
        </div>
    )

}

export default NewProjct