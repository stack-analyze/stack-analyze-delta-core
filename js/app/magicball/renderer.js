const form = document.querySelector('form')
const localeSelect = document.querySelector('select')
const question = document.querySelector('input')
const submitBtn = document.querySelector('#get')
const resetBtn = document.querySelector('#reset')
const answer = document.querySelector('p')

const localeKeyword = {
    en: "magic ball say:",
    es: "la bola magic te dice:"
};

localeSelect.addEventListener('change', () => {
    question.disabled = localeSelect.value === ''
    question.lang = localeSelect.value
})

question.addEventListener('input', () => {
    submitBtn.disabled = question.value.length === question.minLength
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch(
        `https://eightballapi.com/api/biased?question=${question.value}&locale=${localeSelect.value}`
    )
        .then(res => res.json())
        .then(data => {
            answer.textContent = `${localeKeyword[localeSelect.value]}: ${data.reading}`
        })
        .catch(err => {
            answer.textContent = err.message
        })

    question.value = ''
    localeSelect.value = ''
    resetBtn.disabled = true
})

resetBtn.addEventListener('click', () => {
    answer.textContent = ''
    resetBtn.disabled = false
})

// https://eightballapi.com/api/biased?question=${question.value}&locale=${localeSelect.value}