import Header from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { api } from "@/services/apiClient";
import { canSSRAuth } from "@/util/canSSRAuth";
import Head from "next/head";
import { FormEvent, useState } from "react";
import styles from './styles.module.scss'

export default function Cadastrar() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [chromebookSerial, setChromebookSerial] = useState('');

  async function handleNewProfessor(event: FormEvent) {
    event.preventDefault();

    if (name === '' || email === '') {
      console.log('erro')
      return;
    }

    const response = await api.post('/professor', {
      name,
      email,
      chromebookSerial
    })

    console.log("Professor criado com sucesso!")
  }

  return (
    <>
      <Head><title>Cadastro de professor</title></Head>

      <Header />

      <div className={styles.container}>
        <h1>Cadastro de professor</h1>
        <form onSubmit={handleNewProfessor} className={styles.form}>
          <Input 
            placeholder="Nome do professor" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <Input 
            placeholder="Email do professor"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Chromebook do professor"
            value={chromebookSerial}
            onChange={(e) => setChromebookSerial(e.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return{ 
      props: {}
  }
})