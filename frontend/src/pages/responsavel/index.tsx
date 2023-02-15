import Header from "@/components/Header";
import { canSSRAuth } from "@/util/canSSRAuth";

export default function Responsavel() {
    return(
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