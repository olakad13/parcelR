const menuBtn = document.getElementById("menu-btn");
const navBar = document.getElementById("navBar")
const closeBtn = document.getElementById("close-btn")

menuBtn.addEventListener("click" , () => {
    navBar.classList.add("slideIn")
})

closeBtn.addEventListener("click", () => {
    navBar.classList.remove("slideIn")
})