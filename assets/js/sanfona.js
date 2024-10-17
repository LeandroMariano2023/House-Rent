var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        var symbol = this.querySelector(".symbol");

        // Alterna entre "+" e "–"
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            symbol.innerHTML = "+";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            symbol.innerHTML = "–";
        }
    });
}
