import Header from "@/components/Header";
import { api } from "@/services/apiClient";
import { canSSRAuth } from "@/util/canSSRAuth";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from './styles.module.scss'

type Chromebook = {
  serial: string,
    id: string,
    model: string
}

type Aluno = {
  name: string,
  email: string,
  prontuario: string,
  chromebookSerial: string,
  responsaveis: [],
  turmaId: string,
  chromebook: Chromebook
}

export default function Listar() {


  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    async function loadAluno() {
      const response = await api.get('/aluno', {})

      console.log("response: ", response)

      setAlunos(response.data)

    }

    loadAluno()
    console.log(alunos)
  }, [])

  return (
    <>
      <Head>
        <title>Degraus - Listar Alunos</title>
      </Head>

      <Header />

      <div className={styles.container}>

        <ul className={styles.table}>
          {alunos.map((aluno: Aluno) => {
            console.log(aluno.chromebook)
            return (
              <li>
                <p>
                  {aluno.name} |&nbsp;
                  {aluno.email} |&nbsp;
                  {aluno.chromebook ? aluno.chromebook.serial : "nulo"} |&nbsp;
                  {aluno.responsaveis ? aluno.responsaveis : "nulo"}
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
  return {
    props: {}
  }
})