'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

type Produto = {
    id: string;
    nome: string;
    descricao: string;
    preco: string;
    img: string;
    quantidade: number;
};

export default function Carrinho() {
    const [cart, setCart] = useState<Produto[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [cupom, setCupom] = useState<string>("");

    // Carregar carrinho do sessionStorage
    useEffect(() => {
        const carrinhoJSON = sessionStorage.getItem("carrinho");
        if (carrinhoJSON) {
            try {
                const carrinho: Produto[] = JSON.parse(carrinhoJSON);
                setCart(carrinho);
            } catch (error) {
                console.error("Erro ao carregar o carrinho:", error);
            }
        }
    }, []);

    // Calcular total
    useEffect(() => {
        const subtotal = cart.reduce((acc, item) => {
            const precoNum = parseFloat(item.preco.replace("R$", "").replace(",", "."));
            return acc + precoNum * item.quantidade;
        }, 0);
        setTotal(parseFloat(subtotal.toFixed(2)));
    }, [cart]);

    function finalizar(){
        sessionStorage.removeItem("carrinho");
        setCart([]);
    }

    // Função para aplicar cupom
    const aplicarCupom = () => {
        let novoTotal = cart.reduce((acc, item) => {
            const precoNum = parseFloat(item.preco.replace("R$", "").replace(",", "."));
            return acc + precoNum * item.quantidade;
        }, 0);

        if (cupom === "CUPOM1") {
            const totalItens = cart.reduce((acc, item) => acc + item.quantidade, 0);
            if (totalItens >= 7) {
                novoTotal *= 0.5;
            } else {
                alert("CUPOM1 exige 7 ou mais itens no carrinho!");
            }
        } else if (cupom === "CUPOM2") {
            if (cart.length === 0) return;
            const itemMaisBarato = cart.reduce((prev, curr) => {
                const prevPreco = parseFloat(prev.preco.replace("R$", "").replace(",", "."));
                const currPreco = parseFloat(curr.preco.replace("R$", "").replace(",", "."));
                return currPreco < prevPreco ? curr : prev;
            });
            const desconto = parseFloat(itemMaisBarato.preco.replace("R$", "").replace(",", ".")) * 0.5;
            novoTotal -= desconto;
        } else {
            alert("Cupom inválido!");
            return;
        }

        setTotal(parseFloat(novoTotal.toFixed(2)));
    };

    return (
        <section className="bg-white border-2 border-gray-300 rounded-2xl shadow-md px-8 py-6 w-full max-w-3xl mx-auto mt-8">
            <Header/>
            <h2 className="text-2xl font-semibold text-center text-[#3462B3] m-4">
                Itens no Carrinho
            </h2>

            <div className="divide-y divide-gray-200 mb-6">
                {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-4">
                        <div>
                            <h3 className="text-lg font-semibold text-[#3462B3]">{item.nome}</h3>
                            <p className="text-gray-700">{item.descricao}</p>
                            <p className="text-gray-900 font-bold">R$ {item.preco}</p>
                            <p className="text-gray-500">Quantidade: {item.quantidade}</p>
                        </div>
                        <Image src={item.img} alt={item.nome} className="h-24 object-contain" height={100} width={100}/>
                    </div>
                ))}
            </div>

            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Digite o cupom"
                    className="flex-1 border-2 border-gray-300 rounded-xl px-4 py-2"
                    value={cupom}
                    onChange={(e) => setCupom(e.target.value.toUpperCase())}
                />
                <button
                    onClick={aplicarCupom}
                    className="bg-principal text-white font-bold px-6 py-2 rounded-full px-4 cursor-pointer"
                >
                    Aplicar Cupom
                </button>
            </div>

            <div className="p-6 bg-[#eef2ff] border-2 border-dashed border-principal rounded-xl text-center">
                <h3 className="text-xl font-semibold mb-3 text-principal">Resumo do Pedido</h3>
                <p className="text-lg text-gray-700">
                    Total: <strong className="text-gray-900">R$ {total.toFixed(2)}</strong>
                </p>
                <button className="mt-6 px-4 cursor-pointer py-3 font-bold text-white text-lg rounded-full bg-principal transition-all duration-300 ease-in-out hover:bg-[#FF21B4] hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed m-3" onClick={finalizar}>
                    Finalizar Compra
                </button>
            </div>
            <Footer/>
        </section>
    );
}
