localStorage.setItem('hero', 'thor');
localStorage.setItem('todo', 'Buy ice tea');
var myHero = localStorage.getItem('hero');
console.log(myHero);

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo', 'Record youtube vidoes');
console.log(localStorage.getItem('todo'));


// localStorage.removeItem('hero')
localStorage.clear()


myHero = localStorage.getItem('hero');
console.log(myHero);
