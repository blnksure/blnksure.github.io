// 切换提交方式
const tab = document.querySelectorAll('.wrapper .way input')
const detecting = document.querySelector('.wrapper .detecting')
const copy = document.querySelector('.detecting .text span')
const area = document.querySelector('.detecting .text textarea')
const file = document.querySelector('[type="file"]')
const img = document.querySelector('.content img')
detecting.addEventListener('click', function (e) {
  if (e.target.tagName === 'INPUT') {
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].checked === true) {
        // console.log(tab[i].dataset.id);
        document.querySelector('.detecting .active').classList.remove('active')
        document.querySelector(`.detecting ${tab[i].dataset.id}`).classList.add('active')
        if (i === 0) {
          area.value = ''
        } else {
          img.src = './images/u577.jpg'
          img.style.width = '121px'
          img.style.height = '85px'
          img.nextElementSibling.innerHTML = '点击或拖拽文件到此处上传'
          img.nextElementSibling.nextElementSibling.innerHTML = '文件支持格式：word文件(doc，docx)，文本文件(txt)'
          img.nextElementSibling.nextElementSibling.style.color = '#111'
          file.value = ''
        }
      }
    }
  }
  if (e.target.tagName !== 'TEXTAREA' && area.value === '') {
    copy.innerHTML = '将需要检测的内容复制到此处（点击）'
  } else {
    copy.innerHTML = ''
  }
})

//获取文件

file.addEventListener('change', function (e) {
  if (file.files[0]) {
    if (file.files[0].type ===
      "application/msword" || file.files[0].type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      img.src = './images/word.jpg'
      img.style.width = 95 + 'px'
      img.style.height = 85 + 'px'
      img.nextElementSibling.innerHTML = `${file.files[0].name}`
      img.nextElementSibling.nextElementSibling.innerHTML = '上传成功'
      img.nextElementSibling.nextElementSibling.style.color = '#467af2'
    } else if (file.files[0].type === "text/plain") {
      img.src = './images/txt.jpg'
      img.style.width = 95 + 'px'
      img.style.height = 85 + 'px'
      img.nextElementSibling.innerHTML = `${file.files[0].name}`
      img.nextElementSibling.nextElementSibling.innerHTML = '上传成功'
      img.nextElementSibling.nextElementSibling.style.color = '#467af2'
    } else {
      alert('请上传正确的文件格式')
    }

  }

})

// 提交检测
const submitf = document.querySelector('.submitf')
submitf.addEventListener('click', function (e) {
  if (file.files[0]) {

  } else {
    alert('请先上传文件')
    e.preventDefault()
  }

})