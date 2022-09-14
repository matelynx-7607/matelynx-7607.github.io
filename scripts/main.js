let myImage = document.querySelector('#img-resau');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/images-resau-index.png') {
      myImage.setAttribute('src', 'images/images-resau2.png');
    } else {
      myImage.setAttribute('src', 'images/images-resau-index.png');
    }
});


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');


function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Commencez à apprendre les résaux, ' + myName +'!';
  }



  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Commencez à apprendre les résaux, ' + storedName +'!';
  }



  myButton.addEventListener('click', function() {
    setUserName();
  });