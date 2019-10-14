document.addEventListener("DOMContentLoaded", async () => {
  console.log('DOM LOADED')

  let url = "http://localhost:3000/signup"
  try {
    let response = await axios.post(url)
    console.log(response)
  } catch (err) {
    console.log(err)
  }

})
