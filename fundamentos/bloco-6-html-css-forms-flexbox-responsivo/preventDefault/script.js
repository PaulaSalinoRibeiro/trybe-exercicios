// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventLink (event) {
    event.preventDefault()
}

function preventCheckbox (event) {
    event.preventDefault()
}

function preventText (event) {
    if (event.key !== 'a'){
        event.preventDefault()
    }
}

HREF_LINK.addEventListener('click', preventLink)
INPUT_CHECKBOX.addEventListener('click', preventCheckbox)
INPUT_TEXT.addEventListener('keypress', preventText)