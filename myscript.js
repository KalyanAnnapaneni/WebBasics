// // const myElement = document.querySelectorAll('.classone')
// // console.log(myElement[0]);

//  const myPElements = document.querySelector('p')
//  myPElements.textContent = 'I am being changed using js'

const myPElements = document.querySelectorAll('p');

 myPElements.forEach(function(p){
      p.textContent = 'I am changed using loop in js' 
 })

 console.log(myPElements);

const myNewPara = document.createElement('p')
myNewPara.textContent = 'i am added via JS'

document.querySelector('body').appendChild(myNewPara)
document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = ' I was clicked';
})

document.querySelector('#myform').addEventListener('input', ()=>{
    console.log(event.target.value);
})