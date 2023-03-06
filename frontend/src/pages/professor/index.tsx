import Header from "@/components/Header";
import { canSSRAuth } from "@/util/canSSRAuth";
import Head from "next/head";
import Link from "next/link";
import styles from './styles.module.scss'

export default function Professor() {
    return (
        <>
            <Head>
                <title>Degraus - Professor</title>
            </Head>
            <Header />
            <div className={styles.containerCenter}>
                <div className={styles.container}>
                    <nav className={styles.menuAluno}>
                        <Link href='/professor/listar'>
                            Listar
                        </Link>

                        <Link href='/professor/cadastrar'>
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