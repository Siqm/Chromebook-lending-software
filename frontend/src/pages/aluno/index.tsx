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
                        <Link href='/aluno/listar'>
                            Listar
                        </Link>

                        <Link href='/aluno/cadastrar'>
                            Cadastrar
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

