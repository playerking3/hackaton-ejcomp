'use client'
import {CheckAuth} from "@/Utils/Auth";
import Header from "@/Components/Header";

export default function Home() {
    CheckAuth()
    return (
        <div className="font-sans">
          <Header/>
        </div>
    );
}
