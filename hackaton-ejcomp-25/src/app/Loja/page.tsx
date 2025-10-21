'use client'
import CardProduto from "@/Components/CardProduto";
import Link from "next/link";
import {useState} from "react";
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
export default function Loja() {
    const [products, setProducts] = useState<Produto[]>([
        {
            id: "001",
            nome: "Simparic",
            descricao: "Antipulgas Simparic 5 a 10 kg - Cães 20mg",
            preco: "R$291,90",
            img: "/simparic.webp",
            quantidade: 5,
        },
        {
            id: "002",
            nome: "Golden",
            descricao: "Ração Golden Special para Cães Adultos - Frango e Carne",
            preco: "R$149,90",
            img: "/golden.webp",
            quantidade: 3,
        },
        {
            id: "003",
            nome: "Fórmula Natural",
            descricao: "Ração Formula Natural Fresh Meat",
            preco: "R$113,89",
            img: "/racaonatural.jpg",
            quantidade: 2,
        },
        {
            id: "004",
            nome: "Gran Plus",
            descricao: "Ração Gran Plus Choice - Cães Adultos",
            preco: "R$150,90",
            img: "/granplus.webp",
            quantidade: 4,
        },
        {
            id: "005",
            nome: "Doguitos",
            descricao: "Doguitos para Cães - Bifinho Carne",
            preco: "R$7,50",
            img: "/doguitos.webp",
            quantidade: 10,
        },
    ]);

    function retirarProduto(id: string): void {
        setProducts((prev) => {
            // Cria uma cópia do estado anterior
            const updatedProducts = prev.map((produto) => {
                if (produto.id === id) {
                    if (produto.quantidade > 0) {
                        return { ...produto, quantidade: produto.quantidade - 1 };
                    } else {
                        alert("Produto esgotado!");
                    }
                }
                return produto;
            });

            // Pega o produto que foi retirado (com base no id)
            const produtoRetirado = prev.find((p) => p.id === id);

            if (produtoRetirado && produtoRetirado.quantidade > 0) {
                // Lê o carrinho do sessionStorage (ou cria vazio)
                const carrinhoJSON = sessionStorage.getItem("carrinho");
                const carrinho: Produto[] = carrinhoJSON ? JSON.parse(carrinhoJSON) : [];

                // Verifica se já existe no carrinho
                const index = carrinho.findIndex((item) => item.id === produtoRetirado.id);

                if (index !== -1) {
                    // Se já existe → incrementa quantidade
                    carrinho[index].quantidade += .5;
                } else {
                    // Se ainda não existe → adiciona com quantidade = 1
                    carrinho.push({ ...produtoRetirado, quantidade: .5 });
                }

                // Salva de volta
                sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
            }

            return updatedProducts;
        });
    }





    return (
        <div className="px-8 py-6">
            <Header/>
            {/* Ver Carrinho */}
            <Link href="/Carrinho" className="pl-8 text-xl inline-block mb-6">
                Ver Carrinho
            </Link>

            {/* Recomendados */}
            <h2 className="pl-8 text-2xl font-bold mb-4">Recomendados para você</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                {products.map((item, i) => (
                    <CardProduto key={i} id={item.id} descricao={item.descricao} nome={item.nome} preco={item.preco} img={item.img} retirada={retirarProduto} />
                ))}
            </div>
            <Footer/>
        </div>
    );
}
