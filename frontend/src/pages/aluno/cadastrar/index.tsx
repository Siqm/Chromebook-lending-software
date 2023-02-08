import Header from '@/components/Header'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { canSSRAuth } from '@/util/canSSRAuth'
import Head from 'next/head'
import { useState, FormEvent } from 'react'
import styles from './styles.module.scss'

export default function Cadastrar() {

    const [alunoName, setAlunoName] = useState('')
    const [alunoEmail, setAlunoEmail] = useState('')
    const [alunoProntuario, setAlunoProntuario] = useState('')
    const [chromebookSerial, setChromebookSerial] = useState('')
    const [responsavelName, setResponsavelName] = useState('')
    const [responsavelPhone, setResponsavelPhone] = useState('')
    const [responsavelEmail, setResponsavelEmail] = useState('')
    const [turma, setTurma] = useState('')

    async function handleNewAluno(event: FormEvent) {
        event.preventDefault();


    }

    return (
        <>
            <Head>
                <title>Degraus - Cadastrar Aluno</title>
            </Head>

            <Header />
            <div className={styles.container}>

                <form className={styles.formAluno}>

                    <Input
                        type="text"
                        placeholder='Digite o nome do aluno'
                        value={alunoName}
                        onChange={(e) => setAlunoName(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder='Digite o email do aluno'
                        value={alunoEmail}
                        onChange={(e) => setAlunoEmail(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder='Digite o prontuário do aluno'
                        value={alunoProntuario}
                        onChange={(e) => setAlunoProntuario(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder='Digite o serial do chromebook'
                        value={chromebookSerial}
                        onChange={(e) => setChromebookSerial(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder='Digite o nome do responsavel'
                        value={responsavelName}
                        onChange={(e) => setResponsavelName(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder='Digite o telefone do responsavel'
                        value={responsavelPhone}
                        onChange={(e) => setResponsavelPhone(e.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder='Digite o email do responsavel'
                        value={responsavelEmail}
                        onChange={(e) => setResponsavelEmail(e.target.value)}
                    />

                    <select name="turma" id="turma" autoFocus>
                        <option value=""> -- Select Size -- </option>
                        <option value='6 A'>6°ano A</option>
                        <option value='6 B'>6°ano B</option>
                        <option value='7 A' >7°ano A</option>
                        <option value='7 B'>7°ano B</option>
                        <option value='8'>8°ano</option>
                        <option value='9'>9°ano</option>
                        <option value='1 EM'>1°série EM</option>
                        <option value='2 EM'>2°série EM</option>
                        <option value='3 EM'>3°série EM</option>
                    </select>

                    <Button type='submit'>
                        Cadastrar
                    </Button>

                </form>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})