const btnCopy = document.getElementById("btnCopyEmail");
const email = btnCopy.textContent;


// Función para copiar texto al portapales
btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(email)
        .then(() => {
            const originalContent = btnCopy.innerHTML;
            btnCopy.innerHTML = "¡Copiado!";

            // Para desaparecer
            setTimeout(() => {
                btnCopy.innerHTML = originalContent;
            }, 2000);
        })
        .catch(err => console.error("Error al copiar: ", err));
});

// Función para activar el fade y blur cuando se haga scroll a la página 
// const navbar = document.querySelector(".fade-navbar");
/*
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.classList.add("show");
    } else {
        navbar.classList.remove("show");
    }
});
*/