document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector(".burgerMenu");
    const xButton = document.querySelector("#xButton");
    const navegationMobilePage = document.getElementById("navegationMobile");
    const links = document.querySelectorAll("#navegationMobile a");

    // Abre o menu
    burgerButton.addEventListener('click', () => {
        navegationMobilePage.classList.add("show");
        burgerButton.classList.add("hide");
        xButton.classList.remove("hide");
    });

    // Fecha o menu
    xButton.addEventListener('click', () => {
        navegationMobilePage.classList.remove("show");
        xButton.classList.add("hide");
        burgerButton.classList.remove("hide");
    });

    

    // Adiciona rolagem suave e fechamento do menu ao clicar nos links
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            // Fecha o menu
            navegationMobilePage.classList.remove("show");
            xButton.classList.add("hide");
            burgerButton.classList.remove("hide");
        });
    });
});
