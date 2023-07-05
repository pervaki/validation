function validateEmail(email) {
    let mask = /^[a-zA-Z0-9\-_]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/
    return mask.test(email)
}

let checkButton = document.getElementById('checkButton')

checkButton.onclick = function (e){

    let textFieldObject = document.getElementById('textField')
    let text = textFieldObject.value

    if (validateEmail(text)) {
        console.log("valid")
        console.log(text)
    } else {
        console.log("invalid")
        console.log(text)
    }
}
