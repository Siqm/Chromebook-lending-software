import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import styles from './styles.module.scss'
import { FiLogOut } from 'react-icons/fi'

export default function Header() {
    
    const { SignOut } = useContext(AuthContext)

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/'>
                    <img 
                        src="/international-school-branco.png" 
                        alt="Colégio degraus logo" 
                    />
                </Link>

                <nav className={styles.menuNav}>
                    <Link href='/aluno'>
                        Aluno
                    </Link>

                    <Link href='/chromebook'>
                        Chromebook
                    </Link>

                    <Link href='/responsavel'>
                        Responsavel
                    </Link>

                    <button onClick={SignOut}>
                        <FiLogOut size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    )


}