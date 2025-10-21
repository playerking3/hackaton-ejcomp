import Image from "next/image";

interface produto{
    id: string;
    nome?: string;
    descricao?: string;
    preco?: string;
    img: string;
    retirada: (id: string) => void;
}
export default function CardProduto({id, nome, descricao, preco, img, retirada}: produto) {
    return (
        <div className="produto font-sans border rounded-lg shadow p-4 flex flex-col items-center">
            <Image
                src={img} // use caminho relativo à pasta public
                alt={id}
                width={288} // largura em pixels
                height={288} // altura em pixels
                className="object-contain mb-4"/>
            <div className="titulo_produto text-center mb-2">
                <p className="font-semibold">{nome}</p>
                <p>{descricao}</p>
                <p>À vista por:</p>
                <h4 className="text-lg font-bold">{preco}</h4>
            </div>
            <button className="bg-principal text-white px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer" onClick={()=>{retirada(id)}}>Adicionar ao Carrinho</button>
        </div>
    )
}