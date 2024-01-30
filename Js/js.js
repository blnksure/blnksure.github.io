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


var time = new Date()
const data = document.querySelector('.data')
data.innerHTML = time.toLocaleString()

let arr = JSON.parse(localStorage.getItem('keypg')) || []
const tbody = document.querySelector('tbody')
function render() {
    const trArr = arr.map(function (ele, index) {
        return `
    <tr>
      
      <td><span class="time">${ele.time}</span></td>
      <td><span class="ago">用户检测记录${index + 2}</span></td>
      <td><button data-id=${index}>删除</button></td>
    </tr>
  `
    })
    tbody.innerHTML = trArr.join('')
}

render()

tbody.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        // alert(11)
        if (confirm('您确认要删除这条数据吗？')) {
            arr.splice(e.target.dataset.id, 1)
            render()
            localStorage.setItem('keypg', JSON.stringify(arr))
        }

    }
})

const thead = document.querySelector('thead')
thead.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        // alert(11)
        if (confirm('您确认要删除这条数据吗？')) {
            thead.innerHTML = ''
        }

    }
})
