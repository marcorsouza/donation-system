document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var btn = document.getElementById("open-modal-btn");
    var span = document.getElementsByClassName("close-btn")[0];
    var form = document.getElementById("donation-form");

    btn.onclick = function() {
        modal.style.display = "flex"; // Use flex para manter a centralização
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    form.onsubmit = function(event) {
        event.preventDefault();
        // Adicione a lógica de submissão do formulário aqui
        console.log("Form submitted!");

        // Fecha a modal após a submissão
        modal.style.display = "none";
    }
});
