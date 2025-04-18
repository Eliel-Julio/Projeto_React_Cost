import styles from './Home.module.css';
import img from '../../img/ilustracao-cofre-de-porquinho.png';
import LinkButton from '../layout/linkButton'; 

function Home(){

    return(
        <section className={styles.Home_Container}>
            <h1>Bem vindo ao <span>costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/NewProjct" text="Criar Projeto"/>
            <img src={img} alt="costs" className={styles.img}/>
        </section>
    )

}

export default Home