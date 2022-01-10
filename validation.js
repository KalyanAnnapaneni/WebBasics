function myvalidation(){
    var myValue =document.getElementById('myform').value
    

    if (isNaN(myValue)  || myValue <1 || myValue >20){
        console.log("Not a Valid input");

    }else {
        console.log("this is valid");
    }
}

document.querySelector('.myform').addEventListener('submit', (event)=>{
     event.preventDefault();
     console.log(event.target.username.value)
     console.log(event.target.realname.value)
    event.target.username.value = ""
    event.target.realname.value = ""
})



// document.querySelector('#myform').addEventListener('input', ()=>{
//     console.log(event.target.value);
// })

// const myElement = document.getElementById('myform')
 
// console.log(myElement.textContent ='this is not valid');