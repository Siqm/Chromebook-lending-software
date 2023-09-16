import Header from '@/components/Header'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { canSSRAuth } from '@/util/canSSRAuth'
import { useEffect, useState } from 'react'
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

    useEffect(() => {
        
    })

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.wrapper}>
                        <h1>Buscar aluno</h1>
                        <Input placeholder='Nome do aluno' />
                        <Input placeholder='Email do aluno' />
                        <Button>Buscar</Button>
                    </div>

                    <div className={styles.wrapper}>
                        <h1>Lista de alunos encontrados</h1>
                    </div>
                </div>

                <div className={styles.list}>

                    <div className={styles.wrapper}>
                        <h1>Detalhes do aluno X</h1>
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