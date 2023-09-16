import Header from '@/components/Header'
import { canSSRAuth } from '@/util/canSSRAuth'
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Dashboard() {
  return (
    <>
      <Head><title>Degraus - Dashboard</title></Head>
      <Header />

      <div className={styles.container}>
        <div className={styles.menu}>
          <h2>Aluno</h2>
          <Link href="/aluno/listar">Lista de alunos</Link>
          <Link href="/aluno/cadastrar">Cadastrar novo aluno</Link>
          <Link href="/aluno/info">Informações sobre aluno</Link>
        </div>
        
        <div className={styles.menu}>
          <h2>Chromebook</h2>
          <Link href="/chromebook/listar">Listar Chromebooks</Link>
          <Link href="/chromebook/cadastrar">Cadastrar novo Chromebook</Link>
        </div>

        <div className={styles.menu}>
          <h2>Responsáveis</h2>
          <Link href='/responsavel/listar'>Listar Responsáveis</Link>
          <Link href='responsavel/cadastrar'>Cadastrar novo Responsável</Link>
        </div>

        <div className={styles.menu}>
          <h2>Professores</h2>
          <Link href='/professor/listar'>Listar professores</Link>
          <Link href='/professor/cadastrar'>Cadastrar novo professor</Link>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})