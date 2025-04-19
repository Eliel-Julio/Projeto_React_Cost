import styles from './Form.module.css'

function Form(){
    return(
        <form className={styles.FormContainer}>
            {/* <h1>Formulario de criação do projeto</h1> */}
            <label htmlFor="Nome do Projeto">Nome do projeto</label>
                <input type="text" placeholder="Nome do projeto" id="Nome do Projeto"/>
            <label htmlFor="Orçamento do Projeto">Orçamento do projeto</label>
                <input type="number" placeholder="Orçamento do projeto" id="Orçamento do Projeto"/>
            <label htmlFor="category">Selecione a categoria</label>
                <select name="category" id="category">
                    <option value="Serviço">Serviço</option>
                    <option value="Estrutura">Estrutura</option>
                    <option value="Elétrica">Elétrica</option>
                    <option value="Hidráulica">Hidráulica</option>
                    <option value="Acabamento">Acabamento</option>
                </select>
            <input className={styles.submit} type="submit" value="Criar projeto"/>
        </form>
    )
}

export default Form