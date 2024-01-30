// 登录和注册切换
const topanav = document.querySelector('.pri_topanav')
const buttons = document.querySelectorAll('.login button')
const tabs = document.querySelectorAll('.tab-pane')
const box = document.querySelector('.banner .box')
const logBox = document.querySelector('.banner .wrapper .box')
topanav.addEventListener('click', function (e) {
  // console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    const i = +e.target.dataset.id
    box.style.opacity = 1
    if (document.querySelector('.box .active')) {
      document.querySelector('.box .active').classList.remove('active')
    }
    tabs[i].classList.add('active')
  }

})

//登录跳转注册
const fr = document.querySelector('.fr')
// console.log(fr);
fr.addEventListener('click', function () {
  tabs[0].classList.remove('active')
  tabs[1].classList.add('active')
})

//提交表单
//点击提交模块
const logForm = document.querySelector('.form-login')
const agree = document.querySelector('[name=agree]')
const logUsername = document.querySelector('[name=log-username]')
logForm.addEventListener('submit', function (e) {
  e.preventDefault()
  if (!agree.checked) {
    return alert('请勾选同意框')
  }
  localStorage.setItem('pri-username', logUsername.value)
  location.href = './index.html'
})

//验证码登录
// 发送验证码
const logcode = document.querySelector('.logcode')
// 防止多次触发
let logflag = true
logcode.addEventListener('click', function () {
  if (logflag) {
    logflag = false
    let j = 30
    logcode.innerHTML = `${j}秒后重新获取`
    lotimeId = setInterval(function () {
      j--
      logcode.innerHTML = `${j}秒后重新获取`
      if (j === 0) {
        clearInterval(lotimeId)
        logcode.innerHTML = `重新获取`
        logflag = true
      }
    }, 1000)
  }
})

//验证码登录和密码登录切换
const link = document.querySelector('.form-login .link a')
const logPassword = document.querySelector('[name="log-password"]')
const logUser = document.querySelector('[name="log-username"')
link.addEventListener('click', function () {
  if (document.querySelector('.logtive') && logflag) {
    link.innerHTML = '手机验证码登录'
    logPassword.placeholder = '请输入密码'
    logUser.placeholder = '请输入用户名称/手机号码'
    document.querySelector('.logtive').classList.remove('logtive')
  } else {
    link.innerHTML = '密码登录'
    logPassword.placeholder = '请输入验证码'
    logUser.placeholder = '请输入手机号码'
    document.querySelector('.logcode').classList.add('logtive')
  }
})