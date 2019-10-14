document.addEventListener("DOMContentLoaded", () => {
  // Promise to be on time for x appointment
  let hasCar = true;
  let heavyTraffic = true;

  let hupaulsPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      if(hasCar && !heavyTraffic) {
        resolve("Hupaul arrives on time!")
      } else {
        // !hasCar || heavyTraffic
        let error = new Error("Hupaul couldn't make it!")
        reject(error)
      }
    }, 3000)
  })

  hupaulsPromise
    .then((result) => {
      console.log(hupaulsPromise);
      console.log(result)
    }).catch((err) => {
      console.log('There was an error', err)
    })

  console.log(hupaulsPromise);
  console.log('DOMContentLoaded finished')

})
