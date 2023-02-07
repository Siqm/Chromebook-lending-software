import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import styles from './styles.module.scss'

export default function Aluno() {
    return (
        <>
            <Head>
                <title>Degraus - Aluno</title>
            </Head>
            <Header />
            <div className={styles.containerCenter}>
                <div className={styles.container}>
                    <nav className={styles.menuAluno}>
                        <Link href=''>
                            Listar
                        </Link>

                        <Link href=''>
                            Cadastrar
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

