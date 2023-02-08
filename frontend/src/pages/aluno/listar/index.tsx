import Header from "@/components/Header";
import { api } from "@/services/apiClient";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from './styles.module.scss'

type Aluno = {
  name: string,
  email: string,
  prontuario: string,
  chromebookId: string,
  responsaveis: [],
  turmaId: string
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
            return (
              <li>
                <p>
                  {aluno.name} |&nbsp;
                  {aluno.email} |&nbsp;
                  {aluno.chromebookId ? aluno.chromebookId : "nulo"} |&nbsp;
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