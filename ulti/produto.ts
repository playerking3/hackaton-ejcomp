// 1. Interface para um Item do Carrinho
interface ItemCarrinho {
    id: number;
    nome: string;
    precoUnitario: number;
    quantidade: number;
}

// 2. Interface para um Cupom (inclui o código e a lógica de aplicação)
interface Cupom {
    codigo: string;
    descricao: string;
    aplicarDesconto: (itens: ItemCarrinho[]) => number; // Retorna o valor do desconto total
}

// 3. Implementação dos Cupons

// CUPOM 1: 50% de desconto na compra total após 7 itens no carrinho
const CupomTotal7Itens: Cupom = {
    codigo: "VET50MAIS7",
    descricao: "50% de desconto na compra total se houver 7 ou mais itens no carrinho.",
    aplicarDesconto: (itens: ItemCarrinho[]): number => {
        const totalItens = itens.reduce((acc, item) => acc + item.quantidade, 0);

        if (totalItens >= 7) {
            const subtotal = itens.reduce((acc, item) => acc + item.precoUnitario * item.quantidade, 0);
            const desconto = subtotal * 0.50; // 50% de desconto
            console.log(`✅ Cupom ${CupomTotal7Itens.codigo} aplicado! Desconto de 50% no total (${desconto.toFixed(2)})`);
            return desconto;
        }

        return 0;
    },
};

// CUPOM 2: 50% de desconto apenas no item mais barato (sem acúmulo)
const CupomMaisBarato: Cupom = {
    codigo: "BARATO50",
    descricao: "50% de desconto no item de menor valor (unidade).",
    aplicarDesconto: (itens: ItemCarrinho[]): number => {
        // Encontra o preço unitário mais baixo
        const itemMaisBarato = itens.reduce<ItemCarrinho | null>((maisBarato, itemAtual) => {
            if (maisBarato === null || itemAtual.precoUnitario < maisBarato.precoUnitario) {
                return itemAtual;
            }
            return maisBarato;
        }, null);

        if (itemMaisBarato) {
            const desconto = itemMaisBarato.precoUnitario * 0.50; // 50% no item mais barato
            console.log(`✅ Cupom ${CupomMaisBarato.codigo} aplicado! Desconto de 50% em 1 unidade de "${itemMaisBarato.nome}" (${desconto.toFixed(2)})`);
            return desconto;
        }

        return 0;
    },
};

// Mapa de cupons para fácil acesso
const cuponsDisponiveis: Record<string, Cupom> = {
    [CupomTotal7Itens.codigo]: CupomTotal7Itens,
    [CupomMaisBarato.codigo]: CupomMaisBarato,
};

// 4. Função principal para calcular o carrinho
function calcularTotalCarrinho(itens: ItemCarrinho[], codigoCupom?: string): { subtotal: number, desconto: number, total: number } {
    const subtotal = itens.reduce((acc, item) => acc + item.precoUnitario * item.quantidade, 0);
    let desconto = 0;

    if (codigoCupom) {
        const cupom = cuponsDisponiveis[codigoCupom];

        if (cupom) {
            // A lógica aqui é que os cupons NÃO são acumulativos.
            // A função aplicarDesconto retorna o valor do desconto a ser subtraído.
            desconto = cupom.aplicarDesconto(itens);
        } else {
            console.warn(`❌ Cupom ${codigoCupom} inválido.`);
        }
    }

    const total = subtotal - desconto;

    return {
        subtotal: parseFloat(subtotal.toFixed(2)),
        desconto: parseFloat(desconto.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
    };
}
