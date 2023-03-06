import Header from '@/components/Header'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { api } from '@/services/apiClient'
import { canSSRAuth } from '@/util/canSSRAuth'
import {Link} from 'react-router-dom'
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

  const [alunosList, setAlunosList] = useState([])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {

  })

  async function handleFindAluno(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.get("aluno/info", { params: { name, email } })
      setAlunosList(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.input}>
          <h1>Buscar aluno</h1>
          <form onSubmit={handleFindAluno}>
            <Input
              placeholder='Nome do aluno'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder='Email do aluno'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type='submit'>Buscar</Button>
          </form>
        </div>

        <div className={styles.list}>
          {alunosList.map((aluno) => {
            return <ul>
              <li>Nome: {aluno.name}</li>
              <li>Prontuario: {aluno.prontuario}</li>
              <li>
                {aluno.responsaveis.map(responsavel => {
                  return (
                    <>
                      <li>Responsavel: {responsavel.name}</li>
                      <li>Telefone {responsavel.phone}</li>
                    </>
                  )
                }
                )}
              </li>
            </ul>
            
          })}
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