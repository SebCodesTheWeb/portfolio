
export default function runScrollHandler() {
    const scrollToProjectsButton = document.querySelector("#scroll-to-project-button");
scrollToProjectsButton.addEventListener("click", function() {
    document.querySelector("#projects").scrollIntoView();
})
scrollToProjectsButton.addEventListener("mouseover", function() {
    document.querySelector("#down-arrow-header").style.transform = "translateY(2em)"
})
scrollToProjectsButton.addEventListener("mouseleave", function() {
    document.querySelector("#down-arrow-header").style.transform = "translateY(0rem)"
})

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#form").innerHTML = "<h3>Ditt mail är skickat! Jag svarar inom kortast tid.</h3>"
})

}