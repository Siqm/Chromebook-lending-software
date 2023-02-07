import Header from "@/components/Header";
import Head from "next/head";
import styles from './styles.module.scss'

export default function Listar() {
    return (
        <>
            <Head>
                <title>Degraus - Listar Alunos</title>
            </Head>

            <Header/>
            
            <div className={styles.container}>
                <ul className={styles.table}>
                    <li>
                        <p>Nome do aluno | email@email.com | Serial | Responsavel 1 </p>
                    </li>
                    <li>
                        <p>Nome do aluno | email@email.com | Serial | Responsavel 1 </p>
                    </li>
                    <li>
                        <p>Nome do aluno | email@email.com | Serial | Responsavel 1 </p>
                    </li>
                </ul>
            </div>
        </>
    )
}