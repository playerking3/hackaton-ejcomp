import Image from "next/image";
import Link from "next/link";
import Sair from "@/Components/Sair";

export default function Header() {
    return (
        <header className="bg-principal flex justify-between items-center px-10">
            <Image src="/logo.png" alt="Logo Pet Lovers" width={100} height={100} />
            <nav className="flex gap-10">
                <Link href="/Loja">Home</Link>
                <Link href="/Loja">Loja</Link>
                <Link href="/Loja">Consulta</Link>
            </nav>
            <Sair/>
        </header>
    )
}