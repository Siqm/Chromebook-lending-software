import Header from '@/components/Header'
import { canSSRAuth } from '@/util/canSSRAuth'
import styles from './styles.module.scss'

export default function Dashboard() {
    return (
        <>
            <Header/>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return{ 
        props: {}
    }
})