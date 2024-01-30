

// 全选
function selectAll() {
  const all = document.querySelector('.all')
  const tag = document.getElementsByName("a");
  if (!all.checked) {
    for (var i = 0; i < tag.length; i++) {
      var ai = tag[i];
      ai.checked = false;
    }
  } else {
    for (var i = 0; i < tag.length; i++) {
      var ai = tag[i];
      ai.checked = true;
    }
  }

}

let lis = []
let arr = JSON.parse(localStorage.getItem('keypg')) || []
var timeddd = new Date()

const bs = document.querySelectorAll('b')
const box1 = document.querySelector('.superfluous')
const box2 = document.querySelector('.result_page')
const tag = document.getElementsByName("a");
const sub = document.querySelector('.sub')
const doc = document.querySelector('.doc')
sub.addEventListener('click', function () {
  doc.value = '文本文件'

  for (let i = 0; i < tag.length; i++) {

    var ai = tag[i];
    lis[i] = ai.checked
  }
  box1.style.display = 'none'
  box2.style.display = 'flex'

  for (let i = 0; i < bs.length; i++) {
    if (lis[i]) {
      if (i % 2 === 0) {
        bs[i].innerHTML = '✓'
        bs[i].style.color = '#008000'
      }
    } else {
      bs[i].innerHTML = ''
      bs[i].parentElement.style.color = '#808080'
    }
  }

  arr.push({ time: timeddd.toLocaleTimeString() })
  localStorage.setItem('keypg', JSON.stringify(arr))
})

console.log(arr)

