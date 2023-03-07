import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { canSSRAuth } from "@/util/canSSRAuth";
import Head from "next/head";
import Link from "next/link";
import styles from './styles.module.scss'

export default function Professor() {

    const links =[{
        "url":"/professor/listar",
        "description":"Listar Professores"
    }, {
        "url":"/professor/cadastrar",
        "description":"Cadastrar novo Professor"
    }]
    return (
        <>
            <Head>
                <title>Degraus - Professor</title>
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