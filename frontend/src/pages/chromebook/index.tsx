import Header from "@/components/Header";
import { canSSRAuth } from "@/util/canSSRAuth";

export default function Chromebook() {
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