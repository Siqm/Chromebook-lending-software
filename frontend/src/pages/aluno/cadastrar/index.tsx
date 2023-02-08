import Header from '@/components/Header'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { api } from '@/services/apiClient'
import { canSSRAuth } from '@/util/canSSRAuth'
import Head from 'next/head'
import { useState, FormEvent } from 'react'
import styles from './styles.module.scss'

export default function Cadastrar() {



    const [alunoName, setAlunoName] = useState('')
    const [alunoEmail, setAlunoEmail] = useState('')
    const [alunoProntuario, setAlunoProntuario] = useState('')
    const [chromebookSerial, setChromebookSerial] = useState(null)
    const [responsavelName, setResponsavelName] = useState(null)
    const [responsavelPhone, setResponsavelPhone] = useState(null)
    const [responsavelEmail, setResponsavelEmail] = useState(null)
    const [turmaId, setTurmaId] = useState('')

    interface AlunoRequest {
        name: string,
        email: string,
        prontuario: string,
    }

    interface ChromebookRequest {
        serial: string,
    }

    interface ResponsavelRequest {
        name: string,
        phone: string,
        email: string
    }

    interface TurmaIdRequest {
        id: string,
    }

    interface FullAlunoRequest {
        TurmaIdRequest: TurmaIdRequest,
        ResponsavelRequest: ResponsavelRequest,
        ChromebookRequest: ChromebookRequest,
        AlunoRequest: AlunoRequest,
    }

    async function handleNewAluno(event: FormEvent) {
        event.preventDefault();

        if (
            !chromebookSerial ||
            !responsavelEmail ||
            !responsavelName ||
            !responsavelPhone
        ) {
            let FullAlunoRequest = {
                AlunoRequest: {
                    name: alunoName,
                    email: alunoEmail,
                    prontuario: alunoProntuario
                },
                TurmaRequest: {
                    id: turmaId
                }
            }

            console.log('data ',FullAlunoRequest)

            try {
                const response = await api.post('/aluno', FullAlunoRequest)
                console.log(response)
            } catch (err) {
                console.log('Error', err)
            }
        }
    }

    return (
        <>
            <Head>
                <title>Degraus - Cadastrar Aluno</title>
            </Head>

            <Header />
            <div className={styles.container}>

                <form className={styles.formAluno} onSubmit={handleNewAluno}>

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

                    <select name="turmaId" id="turmaId" autoFocus onChange={(e) => setTurmaId(e.target.value)}>
                        <option value=""> -- Select Size -- </option>
                        <option value='2a55a742-ca62-4a4e-a7e3-f3044b15baa1'>6°ano A</option>
                        <option value='387fd89b-84ba-48db-9ade-020ee0c48979'>6°ano B</option>
                        <option value='df928d84-b242-4844-949b-cd37e3b39132' >7°ano A</option>
                        <option value='a7533d60-376f-45ae-a219-35af2133251b'>7°ano B</option>
                        <option value='0a7f53cc-22da-4cf6-9422-673eb90b2536'>8°ano</option>
                        <option value='60f7554b-6d9e-4d11-a93f-9ec984f1f3ce'>9°ano</option>
                        <option value='4c5aa330-28ee-484c-acbe-6731587854b3'>1°série EM</option>
                        <option value='29cb2001-0355-41e5-ae75-e84999a9067d'>2°série EM</option>
                        <option value='169f59a0-79be-4d5b-adac-b63da5321472'>3°série EM</option>
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