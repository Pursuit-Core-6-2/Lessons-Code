class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }

  peek() {
    const firstIndex = 0;
    return this.arr[firstIndex];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

}

let orders = new Queue()

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    let formData = new FormData(form)
    let data = {}
    for(let entry of formData.entries()) {
      let [key, value] = entry;
      console.log(key, value)
        debugger;
      if(data.hasOwnProperty(key)) {
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [].concat(data[key]).concat([value])
        }
        continue;
      }
      data[key] = value;
    }
    console.log('data', JSON.stringify(data, null, 2))
    orders.enqueue(data)
  })

  let dequeueBtn = document.querySelector('#dequeue_btn')
  dequeueBtn.addEventListener('click', event => {
    orders.dequeue();
  })
  
  enableDOMQueue(orders)
})
