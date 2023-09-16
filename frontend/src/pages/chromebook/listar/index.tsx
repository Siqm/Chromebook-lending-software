import Header from '@/components/Header'
import Head from 'next/head'
import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import { api } from '@/services/apiClient';
import { canSSRAuth } from '@/util/canSSRAuth';

export default function Listar() {

  const [chromebooks, setChromebooks] = useState([]);

  useEffect(() => {
    async function loadChromebooks() {
      const response = await api.get('/chromebook', {});

      setChromebooks(response.data)
    }

    loadChromebooks()
  })

  return (
    <>
      <Head><title>Degraus - Listar Chromebooks</title></Head>

      <Header />

      <div className={styles.container}>
        <h1>Lista de Chromebooks</h1>

        <ul className={styles.table}>
          {chromebooks.map((chromebook) => {
            return (
              <li>
                <p>
                  {chromebook.serial} |&nbsp;
                  {chromebook.model} |&nbsp;
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