import Header from "@/components/Header";
import { canSSRAuth } from "@/util/canSSRAuth";
import Head from "next/head";
import Link from "next/link";
import styles from './styles.module.scss'

export default function Chromebook() {
    return (
        <>
            <Head>
                <title>Degraus - Chromebook</title>
            </Head>
            <Header />
            <div className={styles.containerCenter}>
                <div className={styles.container}>
                    <nav className={styles.menuAluno}>
                        <Link href='/chromebook/listar'>
                            Listar
                        </Link>

                        <Link href='/chromebook/cadastrar'>
                            Cadastrar
                        </Link>
                    </nav>
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