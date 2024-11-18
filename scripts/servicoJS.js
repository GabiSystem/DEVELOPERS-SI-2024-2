//objetos que contem as imagens dos cards
const casamentoImgs = [
    {
        imagem: '../imagens/'
    },
    {
        imagem: '../imagens/'
    }
]
const aniversarioImgs = [
    {
        imagem: ''
    }
]
const corporativoImgs = [
    {
        imagem: ''
    }
]


let casCardAtual = 0, aniCardAtual = 0, corCardAtual = 0;

//todas as variaveis que iniciam com cas é relacionado ao card de casamento.
const casCard = document.getElementById('cardCas');
const casImg = document.createElement('img');
casImg.src = casamentoImgs[casCardAtual].imagem;
casCard.appendChild(casImg);

function alterarCas(x) {
    console.log(x)
    if (x == 0) {
        if (casCardAtual == 0) return;
        casCardAtual--;
        alterarCard(0, casCardAtual);
    } else {
        if (casCardAtual < (casamentoImgs.length) - 1) {
            casCardAtual++;
            alterarCard(0, casCardAtual);
        }
    }
}
function alterarCard(x, y) {
    if (x === 0) {
        casImg.src = casamentoImgs[casCardAtual].imagem;
    }
}
