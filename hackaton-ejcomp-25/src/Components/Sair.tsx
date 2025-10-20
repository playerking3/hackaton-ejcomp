'use client';
import {Logout} from "@/Utils/Auth";
import Link from "next/link";

export default function Sair() {
    return (
        <div>
            <Link href="/Login" onClick={Logout}>Sair</Link>
        </div>
    )
}