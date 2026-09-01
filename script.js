const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com o avanço rápido das ferramentas de Inteligência Artificial, como você enxerga o impacto da IA no seu dia a dia e nos estudos?",
        alternativas: [
            {
                texto: "A IA é um ótimo recurso para otimizar tarefas, tirar dúvidas rápidas e auxiliar na aprendizagem.",
                afirmacao: "Você enxerga a Inteligência Artificial como uma aliada no aprendizado e na rotina, aproveitando a tecnologia para expandir seus conhecimentos de forma ágil."
            },
            {
                texto: "Tenho receio de que o uso diário de IA acabe reduzindo o pensamento crítico e a autonomia das pessoas.",
                afirmacao: "Você mantém um olhar cauteloso sobre a tecnologia, priorizando a autonomia do pensamento humano e a análise crítica antes de depender das ferramentas."
            }
        ]
    },
    {
        enunciado: "A automação por IA promete transformar o mercado de trabalho nos próximos anos. Qual cenário você considera mais provável?",
        alternativas: [
            {
                texto: "Novas profissões surgirão e a IA vai substituir tarefas repetitivas, permitindo que o ser humano foque na criatividade.",
                afirmacao: "Acredita que o futuro do trabalho trará uma parceria positiva entre humanos e máquinas, onde a automação abre espaço para a criatividade e inovação."
            },
            {
                texto: "Muitos empregos tradicionais sumirão rapidamente, gerando desafios econômicos e de requalificação profissional.",
                afirmacao: "Reconhece os impactos socioeconômicos do avanço tecnológico e entende a urgência do debate sobre requalificação e adaptação ao mercado."
            }
        ]
    },
    {
        enunciado: "Sobre a ética e a regulamentação do desenvolvimento de novas IAs, qual deve ser a prioridade da sociedade?",
        alternativas: [
            {
                texto: "Criar leis rigorosas para combater desinformação, plágio e proteger a privacidade dos dados das pessoas.",
                afirmacao: "Defende uma regulamentação firme que imponha limites éticos, garantindo a proteção de dados, a segurança e a transparência na era digital."
            },
            {
                texto: "Garantir a liberdade de inovação para que a tecnologia continue evoluindo sem barreiras burocráticas.",
                afirmacao: "Valoriza a liberdade de inovação contínua, acreditando que a evolução acelerada da tecnologia traz benefícios que superam os riscos potenciais."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua perspectiva sobre o Futuro da IA:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
