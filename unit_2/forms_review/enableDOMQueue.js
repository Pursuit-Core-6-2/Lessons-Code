const enableDOMQueue = (queue) => {
  let originalEnqueue = queue.enqueue;
  let originalDequeue = queue.dequeue;
  let list = document.querySelector("ol");

  queue.enqueue = (value) => {
    originalEnqueue.call(queue, value);
    let li = document.createElement("li");
    let { crust, size, topping, special_instructions } = value
    li.innerText = `${size}, ${crust}, ${topping}, ${special_instructions}`
    list.appendChild(li)
  }

  queue.dequeue = () => {
    originalDequeue.call(queue);
    let firstChild = list.firstChild;
    list.removeChild(firstChild)
  }
}
