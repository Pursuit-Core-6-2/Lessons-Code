document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM loaded');
  fetchDogImage();

  let button = document.querySelector("button");
  console.log('button grabbed')
  button.addEventListener("click", fetchDogImage);


  console.log('DOMContentLoaded listener is DONE!!')
})

const fetchDogImage = () => {
  console.log('fetchDogImage started')
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log("Req state changed");
    if (this.readyState === this.DONE) {
      let parsedResponse = JSON.parse(this.response)
      let imageSrc = parsedResponse.message;
      console.log("Respose arrived. Request state is DONE!!");
      displayImage(imageSrc);
    }
  }

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  console.log('Request about to be sent')
  xhr.send();
  console.log('fetchDogImage finished')
}

const displayImage = (url) => {
  let prevImg = document.querySelector('img');
  if (!prevImg) { // No image in DOM. First time clicking
    let firstDogImg = document.createElement('img');
    firstDogImg.src = url
    document.body.appendChild(firstDogImg);   
  } else {
    let newDogImg = document.createElement('img')
    newDogImg.src = url
    prevImg.parentNode.replaceChild(newDogImg, prevImg)
  }
}

console.log("this is a js file");
// JS is DONE. DOM hasn't loaded yet. No more work to do.
