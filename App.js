const smallCups = document.querySelectorAll('.cup-small')
// console.log(smallCups);

const liters = document.getElementById("liters")
// console.log(liters);

const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained");

// forEach loop
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
      // console.log("Cupnhas been clicked");
      // console.log(cup, idx);
      highlightCups(idx)
  })
})

function highlightCups(idx){
 
if(idx === 7 && smallCups[idx].classList.contains('full')){
  idx--
} else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
  idx--
}

  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx){
      cup.classList.add('full')
    } else{
      cup.classList.remove('full')

    }
  })
}

function updateBigCup(){
  const fullCups = document.querySelectorAll('.smallCups')
  const totalCups = document.querySelectorAll('.cups')
}