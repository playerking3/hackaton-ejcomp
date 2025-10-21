import React, {useEffect} from "react";
import {useRouter} from "next/navigation";

export function Auth(event: React.FormEvent<HTMLFormElement>) {

    const form = event.currentTarget;
    const mail = (form.elements[0] as HTMLInputElement).value;
    const name: string = mail.split("@")[0];

    const authData: object = {
        name: name,
        email: mail,
        isAuthenticated: true
    }
    localStorage.setItem("auth", JSON.stringify(authData));
}

export function CheckAuth(){
    const router = useRouter();

    useEffect(() => {
        const data = !!localStorage.getItem("auth");
        console.log(data);
        if (!data) {
            router.push("/Login");
        }
    }, [router]);
}

export function Logout() {
    localStorage.removeItem("auth");
}
