document.querySelector("#no").addEventListener("mouseover", function() {
    document.querySelector("#no").innerHTML = "Ja";
})
document.querySelector("#no").addEventListener("mouseleave", function() {
    document.querySelector("#no").innerHTML = "Nej";
})

document.querySelector("#no").addEventListener("click", function() {
    document.querySelector("#linnegebra").classList.add("lingebra-animation");
    document.querySelector("#user-input-1").remove();
    document.querySelector("#linegebra-title").style.visibility = "visible";
    document.querySelector("#you-like").style.visibility = "visible";
})
document.querySelector("#yes").addEventListener("click", function() {
    document.querySelector("#linnegebra").classList.add("lingebra-animation");
    document.querySelector("#user-input-1").remove();
    document.querySelector("#linegebra-title").style.visibility = "visible";
    document.querySelector("#you-like").style.visibility = "visible";
})