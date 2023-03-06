import Header from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Head from "next/head";
import { FormEvent, useState } from "react";
import styles from './styles.module.scss'

export default function Cadastrar() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [chromebookSerial, setChromebookSerial] = useState();

    async function handleNewProfessor(event: FormEvent) {
        
    }

    return (
        <>
            <Head><title>Cadastro de professor</title></Head>

            <Header />

            <div className={styles.container}>
                <h1>Cadastro de professor</h1>
                <form onSubmit={handleNewProfessor} className={styles.form}>
                    <Input placeholder="Nome do professor"></Input>
                    <Input placeholder="Email do professor"></Input>
                    <Input placeholder="Chromebook do professor"></Input>
                    <Button type="submit">Cadastrar</Button>
                </form>
            </div>
        </>
    )
}