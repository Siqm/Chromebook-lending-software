import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { canSSRAuth } from "@/util/canSSRAuth";
import Head from "next/head";
import Link from "next/link";
import styles from './styles.module.scss'

export default function Aluno() {

    const links = [{
        "url":"/aluno/listar",
        "description":"Listar Alunos"
    }, {
        "url":"/aluno/cadastrar",
        "description":"Cadastrar novo Aluno"
    }, {
        "url":"/aluno/info",
        "description":"Detalhar aluno"
    }]

    return (
        <>
            <Head>
                <title>Degraus - Aluno</title>
            </Head>
            <Header />
            <div className={styles.containerCenter}>
                <div className={styles.container}>
                    <NavBar links={links}></NavBar>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return{ 
        props: {}
    }
})