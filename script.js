//DROPDOWN
const hamburger = document.querySelector('.hamburger')
const dropdown = document.querySelector('.dropdown')
const body = document.querySelector('body')

hamburger.addEventListener('click', function(){
 dropdown.classList.toggle('active')
})


//////////////////////////////

const inputField = document.getElementById("link-input");
const submitBtn = document.getElementById('submit-input')
const mainDiv = document.querySelector(".shortened-link");

 submitBtn.addEventListener('click', function(){
  
 

  const newDiv = document.createElement("div");
  newDiv.classList.add('newDiv')

  const newA = document.createElement("a");
  newA.classList.add('newA')

  const newP = document.createElement('p')
  newP.classList.add('newP')
  newP.innerText = inputField.value;

  const newBtn = document.createElement('button')
  newBtn.classList.add('newBtn')
  newBtn.innerText = 'Copy'

  const removeBtn = document.createElement('button')
  removeBtn.classList.add('remove')
  removeBtn.innerText = 'Remove'

  const buttonDiv = document.createElement('div')
  buttonDiv.classList.add("buttony");
  buttonDiv.appendChild(newBtn);
  buttonDiv.appendChild(removeBtn);

  newDiv.appendChild(newP)
  newDiv.appendChild(newA)
  newDiv.appendChild(buttonDiv)
  mainDiv.appendChild(newDiv)

    if (inputField.value === "") {
      console.log("error");
      newDiv.remove();
      const err = document.createElement('p')
      mainDiv.appendChild(err)
      err.innerText = 'Please enter link!'
      err.style.color = 'red'
      setTimeout(() =>{
        err.remove()
      },1000)
    }
  
  const url = "https://api.shrtco.de/v2/shorten?url=" + inputField.value;
  fetch(url)
    .then((promise) => promise.json())
    .then((data) => {
      const shortLink = data.result.short_link
      newA.innerText = 'https://' + shortLink
      newA.setAttribute('href', 'https://' + shortLink)
      newA.setAttribute('target', '_blank')
      newBtn.addEventListener("click", function () {
        newBtn.innerText = "Copied!";
        newBtn.style.backgroundColor = "hsl(257, 27%, 26%)";
        newBtn.style.fontWeight = "700";
        navigator.clipboard.writeText(shortLink);
      });

      removeBtn.addEventListener('click', function(){
        newDiv.remove()
      })
 
      const allChildren = mainDiv.getElementsByTagName("*").length;
      if(allChildren > 20){
        newDiv.remove()
        const warning = document.createElement('p')
        mainDiv.appendChild(warning)
        warning.innerText = 'You can convert only 3 short links!'
        warning.style.color = 'red'
        setTimeout(function(){
          warning.innerText = ''
          inputField.value = ''
        },2000)
      }
    });
 })


const scrollBtn = document.querySelector('.button-big')
const scrollBtn2 = document.querySelector(".lowerScroll");

scrollBtn.addEventListener('click', myFunction)
scrollBtn2.addEventListener('click', myFunction)

function myFunction() {
  const element = document.getElementById("shortener");
  element.scrollIntoView();
}

