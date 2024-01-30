const inform = document.querySelector(".left p:nth-child(2)")
const right = document.querySelector(".right")
const center = document.querySelector(".center")
const detect = document.querySelector(".left p:nth-child(1)")
const second = document.querySelector(".second")
const jiance = document.querySelector(".header div:nth-child(4)")
const left = document.querySelector(".left")
const button1 = document.querySelector(".detect_content button[type=submit]")
const Detect_page = document.querySelector(".Detect_page")
const button_upload = document.querySelector(".Detect_page div button[type=submit]")
const superfluous = document.querySelector(".superfluous")
const underline = document.querySelector(".header div:nth-child(6)")
const result_page = document.querySelector(".result_page")
inform.addEventListener("click", function () {
    right.style.display = "none"
    center.style.display = "none"
    inform.style.backgroundColor = "#adc7d2"
    detect.style.backgroundColor = "#e5eeff"
    second.style.display = "block"

})
detect.addEventListener("click", function () {
    right.style.display = "block"
    center.style.display = "block"
    inform.style.backgroundColor = "#e5eeff"
    detect.style.backgroundColor = "#adc7d2"
    second.style.display = "none"
})


