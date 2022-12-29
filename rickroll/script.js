let genprob = document.getElementById("genprob")
prob = Math.floor(Math.random() * 100)
genprob.innerHTML = prob

let buttonPlay = document.getElementById("play")
buttonPlay.addEventListener("click", (event) => {
    let actualProb = Math.floor(Math.random() * 100)
    if (actualProb <= prob) {
        window.location.href = "gotcha.html"
    } else {
        window.location.href = "nope.html"
    }
})

let buttonRefreshGenprob = document.getElementById("refresh-genprob")
buttonRefreshGenprob.addEventListener("click", (event) => {
    prob = Math.floor(Math.random() * 100)
    genprob.innerHTML = prob
})