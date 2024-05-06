let checkbox = document.querySelectorAll('input[type=checkbox]'),
cols = document.querySelectorAll('.strength__level__col'),
generateBtn = document.querySelector('.generate__btn'),
strengthText = document.querySelector('.strength__level__text'),
range = document.querySelector('.range'),
rangeLength = document.querySelector('.length__num');

let checkedCount = [];

generateBtn.addEventListener('click', () => {
    checkbox.forEach(item => item.checked ? checkedCount.push(item) : item)
    
    for(let i = 0; i < checkedCount.length; i++){
        if(checkedCount.length <= 1){
            cols[i].classList.toggle('strength__level__too-weak')
        } else if (checkedCount.length == 2) {
            cols[i].classList.toggle('strength__level__weak')
            strengthText.innerText = 'Weak'
        } else if (checkedCount.length == 3) {
            cols[i].classList.toggle('strength__level__medium')
            strengthText.innerText = 'Medium'
        } else if (checkedCount.length == 4) {
            cols[i].classList.toggle('strength__level__strong')
            strengthText.innerText = 'Strong'
        }
    }
})

range.addEventListener('input', () => {
    rangeLength.innerText = range.value
})