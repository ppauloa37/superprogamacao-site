        var header = document.getElementById("root")
        var seta = document.getElementById("seta-fechar")
        var fechar = document.getElementById("wrapper-click")
        var primeira = function() {
            header.style.top = 0.1 + "px";
            seta.textContent = "↑"

        }
        var ani1 = window.setInterval(primeira, 1000)
        seta.addEventListener("click", () => {
            window.clearInterval(ani1)
            header.style.top = "-50px";
            seta.textContent = "↓"
        })
        fechar.addEventListener("click", () => {
            primeira()
        })
