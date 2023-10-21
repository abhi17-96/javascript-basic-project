//using selectors inside the element

const questions = document.querySelectorAll('.question');


questions.forEach((ques) => {
    const btn = ques.querySelector('.question-btn');
    btn.addEventListener('click', function() {

        questions.forEach((question) => {
            if(question !== ques) {
                question.classList.remove("show-text");
            }           
        })

        ques.classList.toggle("show-text");
    })
})


// traversing the dom
// const qBtn = document.querySelectorAll('.question-btn');

// qBtn.forEach((btn) => btn.addEventListener("click", function(e) {
//     const ques = e.currentTarget.parentElement.parentElement;
//     ques.classList.toggle('show-text');
    
// }))