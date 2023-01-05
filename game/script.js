let genprob = document.getElementById("genprob")
prob = Math.floor(Math.random() * 101)
genprob.innerHTML = prob

let buttonPlay = document.getElementById("button-play")
buttonPlay.addEventListener("click", (event) => {
    let actualProb = Math.floor(Math.random() * 101)
    if (actualProb < prob) {
        window.location.href = "gotcha.html"
    } else {
        window.location.href = "nope.html"
    }
})

let buttonRefreshGenprob = document.getElementById("button-refresh-genprob")
buttonRefreshGenprob.addEventListener("click", (event) => {
    prob = Math.floor(Math.random() * 100)
    genprob.innerHTML = prob
})