var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var inputValue2 = document.querySelector('.inputValue2');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

const apiKey = '846284856ea03c53be2e82d460d45b4e'

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+inputValue.value+'&lon='+inputValue2.value+'&appid='+ apiKey)
    .then(Response => Response.json())
    .then(data => console.log(data))
    


.catch(err => alert("Unrecognized Coordinates..."))  

})