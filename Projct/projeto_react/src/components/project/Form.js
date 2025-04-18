import styles from './Form.module.css'

function Form(){
    return(
        <form className={styles.FormContainer}>
            <h1>Form</h1>
            <input type="text" placeholder="Nome do projeto"/>
            <input type="number" placeholder="Orçamento do projeto"/>
            <select name="category" id="category">
                <option value="Serviço">Serviço</option>
                <option value="Estrutura">Estrutura</option>
                <option value="Elétrica">Elétrica</option>
                <option value="Hidráulica">Hidráulica</option>
                <option value="Acabamento">Acabamento</option>
            </select>
            <input type="submit" value="Criar projeto"/>
        </form>
    )
}

export default Form