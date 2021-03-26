//Option 1 - traversing the dom
//using selectors inside the element
//console.log(e.currentTarget.parentElement.parentElement);
//you can reference the parenet element and add show-text (you can repeat)

// const btns = document.querySelectorAll('.card__title--button');

// btns.forEach(function(btn){
// btn.addEventListener('click', function(e){
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
// });
// });


//Option 2
//you can select very specific button to work on it

const questions = document.querySelectorAll('.card');

questions.forEach(function(question){
    //console.log(question);
    //selecting all .card
    const btn = question.querySelector('.card__title--button');
    //console.log(btn);
    //narrow down to button class within the clicked item div
    btn.addEventListener('click', function(){
        //closing other cards when 2nd one is clicked
        questions.forEach(function(item){
        if(item !== question){
            item.classList.remove('show-text');
        }
    });
    question.classList.toggle('show-text')
    });
});

