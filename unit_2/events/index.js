document.addEventListener("DOMContentLoaded", () => {
  let todoList = document.querySelector('#todos-list');
  let docInitTime = Date.now()

  console.log('doc:', docInitTime, '=>', new Date(docInitTime).toLocaleTimeString())
  todoList.addEventListener("click", (event) => {
    let now = Date.now()
    let eventTs = Math.floor(event.timeStamp);

    console.log('now:', now, '=>', new Date(now).toLocaleTimeString());
    console.log('eve:', docInitTime + eventTs, "=>", new Date(docInitTime + eventTs).toLocaleTimeString())
    console.log(`${event.target.innerText} was clicked`)
  }) 
})
