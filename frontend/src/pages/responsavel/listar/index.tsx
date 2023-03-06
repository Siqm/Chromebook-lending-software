import Header from '@/components/Header'
import Head from 'next/head'
import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import { api } from '@/services/apiClient'

export default function Listar() {

  const  [responsaveis, setResponsaveis] = useState([])

  useEffect(() => {
    async function loadResponsaveis() {
      const response = await api.get('/responsavel', {})
      
      setResponsaveis(response.data)
    }

    loadResponsaveis()
  })

  return (
    <>
      <Head><title>Degraus - Listar Chromebooks</title></Head>
      <Header />

      <div className={styles.container}>
        <h1>Lista de responsáveis</h1>

        <ul className={styles.table}>
          {responsaveis.map((responsavel) => {
            return (
              <li>
                <p>
                  {responsavel.name} |&nbsp;
                  {responsavel.email} |&nbsp;
                  {responsavel.phone}
                </p>
              </li>
            )
          })}

        </ul>
      </div>
    </>
  )
}