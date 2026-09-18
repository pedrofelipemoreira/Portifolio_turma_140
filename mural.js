/* =====================================================
   MURAL DA TURMA — DADOS E COMPORTAMENTO

   ⚠️ IMPORTANTE:
   A lista abaixo está com dados de EXEMPLO (baseados na
   referência enviada). Substitua "nome", "papel", "bio",
   "tags" e principalmente "linkedin" pelos dados reais de
   cada estudante da Turma 140 antes de publicar.

   Para adicionar/remover uma pessoa, basta copiar um objeto
   do array e editar os campos.
===================================================== */

const estudantes = [
    {
        nome: "Antonio Cézar",
        papel: "Fã de Flexbox",
        bio: "Descobriu que Grid resolve 90% dos problemas que o Flexbox criou. Ainda ama os dois.",
        tags: ["CSS", "Figma", "Grid"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Arthur Henrique",
        papel: "Debugger profissional",
        bio: "Passa mais tempo no console.log() do que no editor, mas sempre acha o bug.",
        tags: ["JS", "Git", "VS Code"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Carlos Eduardo",
        papel: "Componentizadora",
        bio: "Se puder virar componente, ela componentiza. Mestra em reaproveitar código.",
        tags: ["React", "UI"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Calebe de Araujo",
        papel: "Caçador de pixels",
        bio: "Não dorme enquanto o layout não bate 1:1 com o Figma.",
        tags: ["CSS", "Figma"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Cecília Souza",
        papel: "Chefe do Git",
        bio: "A única que nunca deu force push na branch errada (ainda).",
        tags: ["Git", "GitHub"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Clistian Jose",
        papel: "Animador nato",
        bio: "Toda página que passa por ele ganha uma transição suave a mais.",
        tags: ["CSS", "JS"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Daniel Pereira",
        papel: "Acessibilidade first",
        bio: "Testa tudo com o teclado antes de considerar o projeto pronto.",
        tags: ["HTML", "a11y"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Dayseane Karla",
        papel: "Fetcheiro de API",
        bio: "Consome qualquer API que aparecer pela frente, só pra ver o JSON.",
        tags: ["JS", "API"],
        linkedin: "https://www.linkedin.com/",
    },
];

/* Cores oficiais do portfólio, usadas em rodízio nos post-its */
const coresPostit = ["postit-color-1", "postit-color-2", "postit-color-3", "postit-color-4"];

function iniciais(nome) {
    return nome
        .split(" ")
        .map((palavra) => palavra[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("postitGrid");

    if (!grid) return;

    estudantes.forEach((pessoa, index) => {

        const postit = document.createElement("div");
        postit.className = "postit " + coresPostit[index % coresPostit.length];

        postit.innerHTML = `
            <div class="postit-inner">

                <span class="postit-pin"></span>

                <div class="postit-face postit-front">
                    <div class="postit-avatar">${iniciais(pessoa.nome)}</div>
                    <div>
                        <h3>${pessoa.nome}</h3>
                        <span class="role">${pessoa.papel}</span>
                    </div>
                    <span class="tap">virar &rarr;</span>
                </div>

                <div class="postit-face postit-back">
                    <div>
                        <span class="label">Sobre</span>
                        <p class="bio">${pessoa.bio}</p>
                        <div class="tags">
                            ${pessoa.tags.map((tag) => `<span>${tag}</span>`).join("")}
                        </div>
                    </div>
                    <a class="postit-linkedin" href="${pessoa.linkedin}" target="_blank"
                        rel="noopener noreferrer" aria-label="LinkedIn de ${pessoa.nome}">
                        <i class="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </a>
                </div>

            </div>
        `;

        /* Clique no post-it vira o cartão, exceto se o clique for no botão do LinkedIn */
        postit.addEventListener("click", (event) => {
            if (event.target.closest(".postit-linkedin")) return;
            postit.classList.toggle("flipped");
        });

        grid.appendChild(postit);

    });

});
