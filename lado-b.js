/* =====================================================
   LADO B — DADOS E COMPORTAMENTO

   ⚠️ COMO COLOCAR O CONTEÚDO DA TURMA

   1) VÍDEOS  → array "videos" logo abaixo
        src:      caminho do vídeo (.mp4 ou .webm), ex: "./assets/videos/cantoria.mp4"
                  (deixe "" para mostrar a tela de "sem sinal")
        poster:   (opcional) imagem que aparece antes de dar play
        legenda:  o texto que aparece embaixo da fita
        formato:  "vertical" (vídeo de celular em pé) ou "horizontal"

   2) FOTOS   → array "fotos"
        src:      caminho da foto, ex: "./assets/images/lado-b/fantasia.jpg"
        legenda:  texto escrito "a caneta" na parte de baixo do polaroid

   As fotos abaixo são as da galeria do site, só pra página não
   ficar vazia. Troque pelas fotos e legendas de vocês.
   Para adicionar ou remover, é só copiar/apagar uma linha { ... }.

   Dica: vídeos pesam! Tente deixar cada um abaixo de ~15 MB
   (ou hospede no YouTube/Drive e me peça pra trocar o player).
===================================================== */

const videos = [
    {
        src: "",
        poster: "",
        legenda: "Cantoria oficial do intervalo",
        formato: "vertical",
    },
    {
        src: "",
        poster: "",
        legenda: "Coreografia que ninguém ensaiou",
        formato: "horizontal",
    },
    {
        src: "",
        poster: "",
        legenda: "Dia de fantasia (sem explicação)",
        formato: "vertical",
    },
    {
        src: "",
        poster: "",
        legenda: "A saída da turma, versão caos",
        formato: "vertical",
    },
];

const fotos = [
    { src: "./assets/images/estudantes/foto.2.jpg", legenda: "Antes do caos" },
    { src: "./assets/images/estudantes/foto.9.jpg", legenda: "Quem trouxe o bolo?" },
    { src: "./assets/images/estudantes/foto.3.jpg", legenda: "Polegar pra cima = tudo compilou" },
    { src: "./assets/images/estudantes/foto.10.jpg", legenda: "Selfie de espelho, edição turma" },
    { src: "./assets/images/estudantes/foto.4.jpg", legenda: "Sorriso de quem entregou o projeto" },
    { src: "./assets/images/estudantes/foto.13.jpg", legenda: "Ninguém sabe do que estávamos rindo" },
    { src: "./assets/images/estudantes/foto.7.jpg", legenda: "A turma inteira (com plaquinha)" },
    { src: "./assets/images/estudantes/foto.12.jpg", legenda: "Modo aula séria. Durou 2 minutos." },
    { src: "./assets/images/estudantes/foto.6.jpg", legenda: "Foco total. Quase." },
    { src: "./assets/images/estudantes/foto.15.jpg", legenda: "Ela viu a câmera primeiro" },
    { src: "./assets/images/estudantes/foto.14.jpg", legenda: "Silêncio suspeito na sala" },
    { src: "./assets/images/estudantes/foto.11.jpg", legenda: "Turma completa, sem sobrar ninguém" },
    { src: "./assets/images/estudantes/foto.5.jpg", legenda: "Pose combinada? Nunca." },
];

/* Frases que rolam na faixa amarela */
const frases = [
    "SEM ROTEIRO",
    "SEM FILTRO",
    "CANTAMOS FORA DO TOM",
    "DANÇAMOS SEM SABER",
    "FANTASIA NÃO É OPCIONAL",
    "OFF THE RECORD",
    "404: SERIEDADE NÃO ENCONTRADA",
];

/* Frases do botão "Não clique" */
const avisos = [
    "Eu avisei.",
    "Você lê os termos de uso também, né?",
    "404: seriedade não encontrada.",
    "git push --force na alegria.",
    "Isso aqui não entra no TCC.",
    "Parabéns, você é dev mesmo: clicou no que não devia.",
    "Aqui ninguém é profissional. Bem-vindo.",
    "Tá vendo? Nada aconteceu. (mentira)",
];


document.addEventListener("DOMContentLoaded", () => {

    const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- Faixa animada ---------- */

    const marquee = document.getElementById("marqueeContent");

    if (marquee) {
        const conjunto = frases
            .map((f) => `<span>${f}</span><i class="fa-solid fa-star"></i>`)
            .join("");

        /* O conteúdo é repetido duas vezes para o loop ficar contínuo */
        marquee.innerHTML = conjunto + conjunto;
    }

    /* ---------- Fitas (vídeos) ---------- */

    const tapeGrid = document.getElementById("tapeGrid");

    if (tapeGrid) {
        videos.forEach((video, i) => {

            const horizontal = video.formato === "horizontal";
            const numero = String(i + 1).padStart(2, "0");

            const tela = video.src
                ? `<video controls preload="metadata" playsinline
                        ${video.poster ? `poster="${video.poster}"` : ""}>
                        <source src="${video.src}">
                        Seu navegador não conseguiu tocar esta fita.
                   </video>`
                : `<div class="no-signal">
                        <strong>SEM SINAL</strong>
                        <span>a fita ainda está rebobinando</span>
                   </div>`;

            const card = document.createElement("figure");
            card.className = "tape-card" + (horizontal ? " is-horizontal" : "");
            card.innerHTML = `
                <div class="tape-label">
                    <b>FITA ${numero}</b>
                    <em>gravado sem permissão</em>
                </div>
                <div class="tape-screen">${tela}</div>
                <figcaption>${video.legenda}</figcaption>
            `;

            tapeGrid.appendChild(card);
        });
    }

    /* ---------- Fotos (polaroids) + lightbox ---------- */

    const wall = document.getElementById("polaroidWall");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");

    let fotoAtual = 0;
    let ultimoFoco = null;

    const mostrarFoto = (indice) => {
        fotoAtual = (indice + fotos.length) % fotos.length;
        lightboxImage.src = fotos[fotoAtual].src;
        lightboxImage.alt = fotos[fotoAtual].legenda;
        lightboxCaption.textContent = fotos[fotoAtual].legenda;
    };

    const abrirLightbox = (indice) => {
        ultimoFoco = document.activeElement;
        mostrarFoto(indice);
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        lightboxClose.focus();
    };

    const fecharLightbox = () => {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (ultimoFoco) ultimoFoco.focus();
    };

    if (wall) {
        fotos.forEach((foto, i) => {
            const item = document.createElement("button");
            item.type = "button";
            item.className = "polaroid";
            item.setAttribute("aria-label", "Ver foto: " + foto.legenda);
            item.innerHTML = `
                <img src="${foto.src}" alt="${foto.legenda}" loading="lazy">
                <span class="cap">${foto.legenda}</span>
            `;
            item.addEventListener("click", () => abrirLightbox(i));
            wall.appendChild(item);
        });
    }

    lightboxClose.addEventListener("click", fecharLightbox);

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) fecharLightbox();
    });

    document.addEventListener("keydown", (event) => {
        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") fecharLightbox();
        if (event.key === "ArrowRight") mostrarFoto(fotoAtual + 1);
        if (event.key === "ArrowLeft") mostrarFoto(fotoAtual - 1);
    });

    /* ---------- Contador REC do visor ---------- */

    const timer = document.getElementById("recTimer");
    const inicio = Date.now();

    if (timer) {
        const dois = (n) => String(n).padStart(2, "0");

        setInterval(() => {
            const s = Math.floor((Date.now() - inicio) / 1000);
            timer.textContent =
                dois(Math.floor(s / 3600)) + ":" +
                dois(Math.floor((s % 3600) / 60)) + ":" +
                dois(s % 60);
        }, 1000);
    }

    /* ---------- Números do placar ---------- */

    const numeros = document.querySelectorAll("[data-count]");

    const contar = (el) => {
        const alvo = Number(el.dataset.count);
        const sufixo = el.dataset.suffix || "";

        if (reduzirMovimento || alvo === 0) {
            el.textContent = alvo + sufixo;
            return;
        }

        const duracao = 1400;
        const t0 = performance.now();

        const passo = (agora) => {
            const p = Math.min((agora - t0) / duracao, 1);
            const suave = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(alvo * suave) + sufixo;
            if (p < 1) requestAnimationFrame(passo);
        };

        requestAnimationFrame(passo);
    };

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    contar(entrada.target);
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.6 });

        numeros.forEach((n) => observador.observe(n));
    } else {
        numeros.forEach(contar);
    }

    /* ---------- Confete ---------- */

    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    const cores = ["#FAC111", "#CE1F01", "#F69200", "#f4f1e9"];
    let pecas = [];
    let animando = false;

    const ajustarCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    ajustarCanvas();
    window.addEventListener("resize", ajustarCanvas);

    const desenhar = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pecas.forEach((p) => {
            p.vy += 0.16;
            p.vx *= 0.99;
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.vr;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.cor;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        pecas = pecas.filter((p) => p.y < canvas.height + 30);

        if (pecas.length) {
            requestAnimationFrame(desenhar);
        } else {
            animando = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    const confete = (x, y, quantidade) => {
        if (reduzirMovimento) return;

        for (let i = 0; i < quantidade; i++) {
            const angulo = Math.random() * Math.PI * 2;
            const forca = 4 + Math.random() * 9;

            pecas.push({
                x,
                y,
                vx: Math.cos(angulo) * forca,
                vy: Math.sin(angulo) * forca - 6,
                w: 6 + Math.random() * 8,
                h: 4 + Math.random() * 6,
                rot: Math.random() * Math.PI,
                vr: (Math.random() - 0.5) * 0.4,
                cor: cores[Math.floor(Math.random() * cores.length)],
            });
        }

        if (!animando) {
            animando = true;
            requestAnimationFrame(desenhar);
        }
    };

    /* Explosão de boas-vindas, uma única vez */
    setTimeout(() => confete(window.innerWidth / 2, window.innerHeight * 0.4, 140), 350);

    /* ---------- Botão "Não clique" ---------- */

    const toast = document.getElementById("toast");
    const botao = document.getElementById("dontClick");
    let ultimoAviso = -1;
    let timeoutAviso;

    const avisar = (texto) => {
        toast.textContent = texto;
        toast.classList.add("show");
        clearTimeout(timeoutAviso);
        timeoutAviso = setTimeout(() => toast.classList.remove("show"), 2800);
    };

    if (botao) {
        botao.addEventListener("click", (event) => {
            const r = event.currentTarget.getBoundingClientRect();
            confete(r.left + r.width / 2, r.top + r.height / 2, 110);

            let i;
            do {
                i = Math.floor(Math.random() * avisos.length);
            } while (i === ultimoAviso);

            ultimoAviso = i;
            avisar(avisos[i]);
        });
    }

    /* ---------- Clique no "B" faz o título tremer ---------- */

    const bigB = document.getElementById("bigB");

    if (bigB && !reduzirMovimento) {
        bigB.addEventListener("click", () => {
            bigB.classList.remove("is-glitching");
            void bigB.offsetWidth;
            bigB.classList.add("is-glitching");
        });

        bigB.addEventListener("animationend", (event) => {
            if (event.animationName === "glitch-fast") {
                bigB.classList.remove("is-glitching");
            }
        });
    }

});
