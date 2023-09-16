import Header from '@/components/Header'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { setupAPIClient } from '@/services/api'
import { canSSRAuth } from '@/util/canSSRAuth'
import { FormEvent, useEffect, useState } from 'react'
import styles from './styles.module.scss'

type Aluno = {
  name: string,
  email: string,
  prontuario: string,
  chromebookId: string,
  responsaveis: [],
  turmaId: string
}

export default function Info() {

  const [alunos, setAlunos] = useState([])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedAluno, setSelectedAluno] = useState('');

  useEffect(() => {

  })

  async function handleAlunoResearch(event: FormEvent) {
    event.preventDefault();

    if (name === '' && email === '') {
      alert("Preencha os campos")
    }

    const apiClient = setupAPIClient();
    console.log(name, email)
    const teste = await apiClient.post('/aluno/info', {
      name: name,
      email: email
    })

    setAlunos(teste.data)
    console.log(alunos)
  }

  function displayAluno(event) {
    let index = event.target.value

    console.log("foda",alunos[index])
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.wrapper}>
            <h1>Buscar aluno</h1>
            <form onSubmit={handleAlunoResearch}>
              <Input placeholder='Nome do aluno' type='text' value={name} onChange={(e) => setName(e.target.value)} />
              <Input placeholder='Email do aluno' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Button type='submit'>Buscar</Button>
            </form>
          </div>

          <div className={styles.wrapper}>
            <h1>Lista de alunos encontrados</h1>
            {alunos.map((a, index) => {
              return <Button onClick={displayAluno} value={index}>{a.name} index {index}</Button>
            })}
          </div>
        </div>

        <div className={styles.list}>

          <div className={styles.wrapper}>
            <h1>Detalhes do aluno X</h1>
            <p>{selectedAluno}</p>
          </div>
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