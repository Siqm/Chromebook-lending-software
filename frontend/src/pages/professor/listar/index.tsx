import Header from '@/components/Header'
import Head from 'next/head'
import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import { api } from '@/services/apiClient'
import { canSSRAuth } from '@/util/canSSRAuth'

export default function Listar() {

  const [professores, setProfessores] = useState([])

  useEffect(() => {
    async function loadProfessor() {
      const response = await api.get('/professor', {})

      setProfessores(response.data)
    }

    loadProfessor()
  })

  return (
    <>
      <Head><title>Degraus - Listar professores</title></Head>

      <Header />

      <div className={styles.container}>
        <h1>Lista de professores</h1>

        <ul className={styles.table}>
          {professores.map((professor) => {
            return (
              <li>
                <p>
                  {professor.name} |&nbsp;
                  {professor.email} |&nbsp;
                  {professor.chromebookId ? professor.chromebookId : "nulo"} |&nbsp;
                </p>
              </li>
            )
          })}

        </ul>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return{ 
      props: {}
  }
})