const questions = document.querySelectorAll('.question')
const openQuestionBtns = document.querySelectorAll(".fa-solid")
const closeQuestionBtns = document.querySelectorAll(".xmark")

openQuestionBtns.forEach((btn, idx)=> {
    btn.addEventListener('click', ()=> {
        questions[idx].classList.add('open-question')
    })
})

closeQuestionBtns.forEach((btn, idx)=> {
    btn.addEventListener('click', ()=> {
        questions[idx].classList.remove('open-question')
    })
})
