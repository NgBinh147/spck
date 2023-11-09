function checkField(field) {
    if (field == null) {
        return false
    }else {
        return true
    }
}
function checkLength(field) {
    if (field.length < 8) {
        return false
    }else {
        return true
    }
}

function checkMail(field) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
}if (expression.test(field) == false) {
    return false
}else {
    return true
}

function checkPassword(pw1, pw2) {
    if (pw1 != pw2) {
        return false
    }else {
        return true
    }
}

let username = document.getElementById('username').value
let email = document.getElementById('email').value
let password = document.getElementById('password').value
let confirmed_password = document.getElementById('confirmed-password').value
let signUpBtn = document.getElementById('sign-up-btn')

function checkRegister() {
    if (checkField(username) == false || checkField(email) == false
    || checkField(password) == false || checkField(confirmed_password) == false) {
        alert('One or more field is empty!')
        return
    } else if (checkLength(username) == false || checkLength(password) == false
    || checkLength(confirmed_password) == false) {
        alert('Username or Password must have 8 characters length!')
    }else if (checkMail(email) == false) {
        alert('wrong email format')
    }else if (checkPassword(password, confirmed_password) == false) {
        alert('Password not matched!')
        return
    } else {
        alert('Sign up successfully!')
        return
    }
}