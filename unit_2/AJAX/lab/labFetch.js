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
  let responsePromise = fetch("https://url.ceo/api/breeds/image/random")

  console.log(responsePromise)
  // 1st. Promise is pending 
  // Then one of: 
  // -- resolved -> Fulfilled
  // -- rejected -> Not-Fulfilled

  const handlePromiseSuccess = (response) => {
    console.log('Promise fulfilled. Response arrived!', response)
    console.log(responsePromise)
    return response.json()
  }

  responsePromise.then(handlePromiseSuccess)
  responsePromise.catch((err) => {
    console.log('there was an error', err)
    console.log(responsePromise);
  })
  // const handleParsedResponseData = (data) => {
  //   console.log('Data converted/parsed', data)
  //   displayImage(data.message)
  // }

  // let parsingPromise = responsePromise.then(handlePromiseSuccess)
  // parsingPromise.then(handleParsedResponseData)
  

  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then(response => {
  //     // Receives HTTP response and initiates parsing of response body (data)
  //     console.log(response)
  //     return response.json();
  //   })
  //   .then(dataObj => {
  //     console.log('dataObj', dataObj)
  //     // Receives the parsed data after successful extractions/conversion
  //     displayImage(dataObj.message)
  //   })
  //   .catch(err => {
  //     console.log("err: ", err) 
  //   })

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
