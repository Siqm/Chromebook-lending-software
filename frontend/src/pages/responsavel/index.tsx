import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { canSSRAuth } from "@/util/canSSRAuth";
import Head from "next/head";
import Link from "next/link";
import styles from './styles.module.scss'

export default function Responsavel() {

    const links = [{
        "url":"/responsavel/listar",
        "description":"Listar Responsáveis"
    }, {
        "url":"/responsavel/cadastrar",
        "description":"Cadstrar novo Responsável"
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