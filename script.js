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