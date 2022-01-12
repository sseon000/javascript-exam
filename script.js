const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");

const numbersLotto = []
const colors = ['tomato','teal','orange','purple','blue']
const paintColor = (num)=>{
    const eachNumberDiv = document.createElement("div")
    let colorIndex = Math.floor(num / 10)
    eachNumberDiv.classList.add('eachnum')
    eachNumberDiv.textContent = num
    eachNumberDiv.style.backgroundColor = colors[colorIndex]
    numbersDiv.appendChild(eachNumberDiv)
}

drawButton.addEventListener("click", ()=>{
    //1. numbersLotto 배열에 랜덤 숫자6개 담기
    while(numbersLotto.length < 6){
        let num = Math.floor(Math.random() * 45) + 1
        if(numbersLotto.indexOf(num) === -1){
            numbersLotto.push(num)
            paintColor(num)
        }
    } 
    console.log(numbersLotto)
})
resetButton.addEventListener("click", ()=>{
    numbersLotto.splice(0,6)
    numbersDiv.innerHTML = ''
})