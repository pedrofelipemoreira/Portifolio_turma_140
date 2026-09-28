/* =====================================================
   MURAL DA TURMA — DADOS E COMPORTAMENTO

   ⚠️ IMPORTANTE:
   A lista abaixo está com dados de EXEMPLO (baseados na
   referência enviada). Substitua "nome", "papel", "bio",
   "tags" e principalmente "linkedin" pelos dados reais de
   cada estudante da Turma 140 antes de publicar.

   Para adicionar/remover uma pessoa, basta copiar um objeto
   do array e editar os campos.

   FOTO DO CRACHÁ:
   Em cada aluno existe o campo  foto: ""
   Basta colocar o caminho (ou URL) da imagem, por exemplo:
       foto: "./assets/images/mural/antonio-cezar.jpg"
   Se ficar vazio (ou a imagem não carregar), o crachá mostra
   automaticamente as iniciais do aluno no lugar da foto.
   Dica: use fotos de rosto, de preferência na vertical ou
   quadradas (o site já recorta e centraliza sozinho).
===================================================== */

const estudantes = [
    {
        nome: "Antonio Cézar",
        foto: "./assets/images/cracha/antonio_cezar.jpeg",
        papel: "",
        bio: "",
        tags: ["CSS", "Figma", "Grid"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Arthur Henrique",
        foto: "./assets/images/cracha/arthur_henrrique.jpeg",
        papel: "",
        bio: "",
        tags: ["JS", "Git", "VS Code"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Carlos Eduardo",
        foto: "./assets/images/cracha/carlos_eduardo.jpeg",
        papel: "",
        bio: "",
        tags: ["React", "UI"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Calebe de Araujo",
        foto: "./assets/images/cracha/calebe_araujo.jpeg",
        papel: "",
        bio: "",
        tags: ["CSS", "Figma"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Cecília Souza",
        foto: "./assets/images/cracha/cecilia_souza.jpeg",
        papel: "Design / UI/UX",
        bio: "Descobriu que criar um Design System resolve 90% dos problemas que o 'layout livre' criou. Ainda ama a liberdade de rabiscar.",
        tags: ["Figma", "Ilustrator", "Canva"],
        linkedin: "https://www.linkedin.com/in/cecília-de-souza-32b457369/",
    },
    {
        nome: "Clistian Jose",
        foto: "./assets/images/cracha/clistian_jose.jpeg",
        papel: "Q.A. (Quality Assurance)",
        bio: "Descobriu que automatizar os testes resolve 90% dos problemas que o teste manual não dava conta. Ainda ama achar bug em produção.",
        tags: ["Cypress / Playwright", "Postman"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Daniel Pereira",
        foto: "./assets/images/cracha/daniel_pereira.jpeg",
        papel: "",
        bio: "",
        tags: ["HTML", "a11y"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "Dayseane Karla",
        foto: "./assets/images/cracha/dayseane_karla.jpeg",
        papel: "",
        bio: "",
        tags: ["JS", "API"],
        linkedin: "https://www.linkedin.com/in/dayseane-prazeres-26539a302/",
    },





    {
        nome: "DÉBORA VITÓRIA",
        foto: "./assets/images/cracha/debora_vitoria.jpeg",
        papel: "",
        bio: "",
        tags: ["CSS", "Figma", "Grid"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "EFRAIM FLAVIO",
        foto: "./assets/images/cracha/efraim_flavio.jpeg",
        papel: "",
        bio: "",
        tags: ["JS", "Git", "VS Code"],
        linkedin: "https://www.linkedin.com/in/efraim-flavio-6271a8409/",
    },
    {
        nome: "EMMANUEL HENRIQUE",
        foto: "./assets/images/cracha/emanuel_henrrique.jpeg",
        papel: "Design / UI/UX",
        bio: "Descobriu que regras de usabilidade estruturam o produto. Ainda ama a tela em branco e o caos controlado de um bom rascunho.",
        tags: ["Figma", "Canva", "CSS"],
        linkedin: "https://www.linkedin.com/in/emmanuel-henrique-a6440b399/",
    },
    {
        nome: "FÁBIO ARAÚJO",
        foto: "./assets/images/cracha/fabio_araujo.jpeg",
        papel: "",
        bio: "",
        tags: ["CSS", "Figma"],
        linkedin: "https://www.linkedin.com/in/fabiuaraujo/",
    },
    {
        nome: "JOÃO ARTHUR",
        foto: "./assets/images/cracha/joao_arthur.jpeg",
        papel: "Front-end",
        bio: "Descobriu que aprender JavaScript puro resolve 90% dos problemas que os frameworks criaram. Ainda ama o React.",
        tags: ["JavaScript", "React", "CSS / Tailwind"],
        linkedin: "https://www.linkedin.com/in/arthur-albuquerque-60066b333/",
    },
    {
        nome: "JOSUÉ LUIZ",
        foto: "./assets/images/cracha/josue_luiz.jpeg",
        papel: "",
        bio: "",
        tags: ["CSS", "JS"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "JOYCE KELLY",
        foto: "./assets/images/cracha/joyce_kelly.jpeg",
        papel: "",
        bio: "",
        tags: ["HTML", "a11y"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "LETÍCIA ROSA",
        foto: "./assets/images/cracha/leticia_rosa.jpeg",
        papel: "",
        bio: "",
        tags: ["JS", "API"],
        linkedin: "https://www.linkedin.com/in/leticia-rosa2003/",
    },




    {
        nome: "LUIZ FELIPE",
        foto: "./assets/images/cracha/luiz_felipe.jpeg",
        papel: "",
        bio: "",
        tags: ["CSS", "Figma", "Grid"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "MARIA EDUARDA",
        foto: "./assets/images/cracha/maria_eduarda.jpeg",
        papel: "",
        bio: "",
        tags: ["JS", "Git", "VS Code"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "MATHEUS BEZERRA ",
        foto: "./assets/images/cracha/matheus_bezerra.jpeg",
        papel: "Frpmt-End",
        bio: "Descobriu que tipar tudo com TypeScript resolve 90% dos problemas que os erros em tempo de execução e undefined criaram. Aindaama ver a interface ganhando vida na tela.",
        tags: ["React_native", "TypeScript", "Tailwind CSS"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "MATHEUS GUILHERME",
        foto: "./assets/images/cracha/matheus_guilherme.jpeg",
        papel: "Back-End",
        bio: "Descobriu que otimizar as queries do banco resolve 90% dos problemas que a arquitetura de microserviços criou. Ainda ama criar APIs.",
        tags: ["Node.js", "postegreSQL", "Java"],
        linkedin: "https://www.linkedin.com/in/matheus-guilherme4/",
    },
    {
        nome: "NICOLAS KLAYVERT",
        foto: "./assets/images/cracha/nicolas_klayvert.jpeg",
        papel: "",
        bio: "",
        tags: ["Git", "GitHub"],
        linkedin: "https://www.linkedin.com/in/nicolas-klayvert/",
    },
    {
        nome: "PEDRO FELIPE",
        foto: "./assets/images/cracha/pedro_felipe.jpeg",
        papel: "Full-stack",
        bio: "Descobriu que tratar o estado no frontend resolve 90% dos problemas de re-renderização que o React criou. Ainda ama subir APIs e ver a tela renderizar sem bug.",
        tags: ["Node.js", "Mongodb", "React"],
        linkedin: "https://www.linkedin.com/in/pedrofelipemoreira/",
    },
    {
        nome: "RAFFAELA GALDINO",
        foto: "./assets/images/cracha/raffaela_galdinho.jpeg",
        papel: "Docuemntação",
        bio: "Resolvendo 90% dos ruídos de produto com jornadas visuais no Miro e UX Docs bem estruturados. Apaixonado por transformar processos complexos em fluxos simples.",
        tags: ["Miro", "Docs"],
        linkedin: "https://www.linkedin.com/in/raffaela-galdino-thorpe-b461522a9/",
    },
    {
        nome: "RAY ENIO",
        foto: "./assets/images/cracha/ray_enio.jpeg",
        papel: "Q.A. (Quality Assurance)",
        bio: "Gosta de encontrar problemas antes que eles cheguem ao usuário. Curioso, atento aos detalhes e sempre buscando aprender novas formas de testar, identificar bugs e melhorar a qualidade dos sistemas.",
        tags: ["Vitest", "Postman", "Jest / Cypress"],
        linkedin: "https://www.linkedin.com/in/ray-enio-528282412/",
    },



    {
        nome: "THIAGO FILIPE",
        foto: "./assets/images/cracha/thiago_felipe.png",
        papel: "",
        bio: "",
        tags: ["CSS", "Figma", "Grid"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "VITOR GABRIEL",
        foto: "./assets/images/cracha/vitor_gabriel.jpeg",
        papel: "",
        bio: "",
        tags: ["JS", "Git", "VS Code"],
        linkedin: "https://www.linkedin.com/in/vitor-gabriel-b71b6633b/",
    },
    {
        nome: "WILTON GABRIEL",
        foto: "./assets/images/cracha/wilton_gabriel.jpeg",
        papel: "",
        bio: "",
        tags: ["React", "UI"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "YAN MATHEUS (shoyu)",
        foto: "./assets/images/cracha/yan_mathues.jpeg",
        papel: "",
        bio: "",
        tags: ["CSS", "Figma"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "YANA CLARA",
        foto: "./assets/images/cracha/yana_clara.jpeg",
        papel: "Design / Cybersecurity",
        bio: "Gosta de transformar ideias em algo visual , ao mesmo tempo, explorar o universo da segurança digital e entender como proteger a tecnologia por trás de tudo.",
        tags: ["Canva", "Figma", "NMAP"],
        linkedin: "https://www.linkedin.com/",
    },
    {
        nome: "YANCO VINICIUS",
        foto: "./assets/images/cracha/yanco_vinicius.jpeg",
        papel: "",
        bio: "",
        tags: ["CSS", "JS"],
        linkedin: "https://www.linkedin.com/",
    },



];

/* Cores oficiais do portfólio, usadas em rodízio nos post-its */
const coresPostit = ["postit-color-1", "postit-color-2", "postit-color-3", "postit-color-4"];

function iniciais(nome) {
    return nome
        .trim()
        .split(/\s+/)
        .map((palavra) => palavra[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

/* Monta o espaço da foto: usa <img> se houver url, senão as iniciais */
function montarFoto(pessoa, classe) {
    const ini = iniciais(pessoa.nome);

    if (!pessoa.foto) {
        return `<div class="${classe} is-empty"><span class="badge-initials">${ini}</span></div>`;
    }

    return `
        <div class="${classe}">
            <img src="${pessoa.foto}" alt="Foto de ${pessoa.nome.trim()}" loading="lazy">
            <span class="badge-initials">${ini}</span>
        </div>
    `;
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

                <!-- FRENTE: crachá -->
                <div class="postit-face postit-front">

                    <div class="badge-head">
                        <span>Turma 140</span>
                        <span>Front-end</span>
                    </div>

                    ${montarFoto(pessoa, "badge-photo")}

                    <div class="badge-info">
                        <h3>${pessoa.nome.trim()}</h3>
                        <span class="role">${pessoa.papel}</span>
                    </div>

                    <div class="badge-foot">
                        <span class="badge-barcode" aria-hidden="true"></span>
                        <span class="tap">virar &rarr;</span>
                    </div>

                </div>

                <!-- VERSO: sobre + LinkedIn -->
                <div class="postit-face postit-back">

                    <div class="badge-mini">
                        ${montarFoto(pessoa, "badge-mini-photo")}
                        <div>
                            <strong>${pessoa.nome.trim()}</strong>
                            <span>${pessoa.papel}</span>
                        </div>
                    </div>

                    <div>
                        <span class="label">Sobre</span>
                        <p class="bio">${pessoa.bio}</p>
                        <div class="tags">
                            ${pessoa.tags.map((tag) => `<span>${tag}</span>`).join("")}
                        </div>
                    </div>

                    <a class="postit-linkedin" href="${pessoa.linkedin}" target="_blank"
                        rel="noopener noreferrer" aria-label="LinkedIn de ${pessoa.nome.trim()}">
                        <i class="fa-brands fa-linkedin"></i>
                        LinkedIn
                    </a>

                </div>

            </div>
        `;

        /* Se a foto não carregar, remove o <img> e sobram as iniciais */
        postit.querySelectorAll(".badge-photo img, .badge-mini-photo img").forEach((img) => {
            img.addEventListener("error", () => {
                img.parentElement.classList.add("is-empty");
                img.remove();
            });
        });

        /* Clique no post-it vira o cartão, exceto se o clique for no botão do LinkedIn */
        postit.addEventListener("click", (event) => {
            if (event.target.closest(".postit-linkedin")) return;
            postit.classList.toggle("flipped");
        });

        grid.appendChild(postit);

    });

});