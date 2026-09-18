/* =====================================================
   PORTFÓLIO TURMA 140 — SCRIPTS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Lightbox da galeria ---------- */

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");
    const galleryItems = document.querySelectorAll(".gallery-item");

    if (lightbox && lightboxImage && galleryItems.length) {

        const openLightbox = (item) => {
            const img = item.querySelector("img");
            const caption = item.querySelector(".gallery-overlay span");

            lightboxImage.src = img.getAttribute("src");
            lightboxImage.alt = img.getAttribute("alt") || "";
            lightboxCaption.textContent = caption ? caption.textContent : "";

            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        };

        const closeLightbox = () => {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        };

        galleryItems.forEach((item) => {
            item.addEventListener("click", () => openLightbox(item));
        });

        lightboxClose.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && lightbox.classList.contains("active")) {
                closeLightbox();
            }
        });

    }

});
