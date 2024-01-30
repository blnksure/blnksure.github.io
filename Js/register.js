//注册
// 发送验证码
const code = document.querySelector('.code')
// 防止多次触发
let flag = true
code.addEventListener('click', function () {
  if (flag) {
    flag = false
    let i = 30
    code.innerHTML = `${i}秒后重新获取`
    timeId = setInterval(function () {
      i--
      code.innerHTML = `${i}秒后重新获取`
      if (i === 0) {
        clearInterval(timeId)
        code.innerHTML = `重新获取`
        flag = true
      }
    }, 1000)
  }
})

//2 用户名表单验证
const username = document.querySelector('[name=username]')
// console.log(username);
username.addEventListener('change', verifyName)
function verifyName() {
  // console.log(11);
  const span = username.nextElementSibling
  const reg = /^[a-zA-Z0-9-_]{6,10}$/
  if (!reg.test(username.value)) {
    span.innerHTML = '账号只能由6-10位字母或下划线构成'
    return false
  }
  span.innerHTML = ''
  return true
}

//3 手机号更改
const phone = document.querySelector('[name=phone]')
phone.addEventListener('change', verifyphone)
function verifyphone() {
  // console.log(11);
  const span = phone.nextElementSibling
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/

  if (!reg.test(phone.value)) {
    span.innerHTML = '请输入正确的手机号'
    return false
  }
  span.innerHTML = ''
  return true
}

//4 0验证码
const codeInput = document.querySelector('[name=code]')
codeInput.addEventListener('change', verifyCode)
function verifyCode() {
  const span = codeInput.nextElementSibling
  const reg = /^\d{6}$/
  if (!reg.test(codeInput.value)) {
    span.innerHTML = '请输入正确的6位验证码'
    return false
  }
  span.innerHTML = ''
  return true
}

//5 密码框
const password = document.querySelector('[name=password]')
password.addEventListener('change', verifyPwd)
function verifyPwd() {
  const span = password.nextElementSibling
  const reg = /^[a-zA-Z0-9-_]{6,20}$/
  if (!reg.test(password.value)) {
    span.innerHTML = '密码只能由6-20位字母,数字或下划线组成'
    return false
  }
  span.innerHTML = ''
  return true
}


// 密码再次验证
const confirm = document.querySelector('[name=confirm]')
confirm.addEventListener('change', verifyConfirm)
function verifyConfirm() {
  const span = confirm.nextElementSibling
  if (password.value !== confirm.value) {
    span.innerHTML = '两次输入的密码不一致'
    return false
  }
  span.innerHTML = ''
  return true
}


// 提交模块
const form = document.querySelector('.form-register')
const checkbox = document.querySelector('.yes input')
const inputs = document.querySelectorAll('.form-register .reall')
// console.log(inputs)
form.addEventListener('submit', function (e) {
  // contains 包含返回true 否则false

  if (!checkbox.checked) {
    alert('请勾选同意协议')
    e.preventDefault()
  }
  if (verifyName() && verifyphone() && verifyCode() && verifyPwd() && verifyConfirm()) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = ''
    }
    tabs[1].classList.remove('active')
    tabs[0].classList.add('active')

    alert('注册成功请登录!')
    e.preventDefault()
  } else {
    e.preventDefault()
  }


})