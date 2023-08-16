const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];


// 1 - DISPLAY ALL TODOS IN THE VIEW
const container = document.getElementById('todosContainer');

todos.forEach((item) => {
  const itemHTML = `<div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
    <input class="d-flex form-check-input me-1" type="checkbox" ${item.done ? 'checked' : 'unchecked'}>
    <div>${item.title}</div>
  </div>`
  container.insertAdjacentHTML('beforeend', itemHTML)
})


// 2 - ADD A NEW TODO
// 1. select the button
const addTodo = document.getElementById('addTodo');
// 2. add an event listener(click)
addTodo.addEventListener('click', (event) => {
  // 3. add to the list
  // 3.1 RETRIEVE THE TITLE VALUE
  const titleValue = document.querySelector('.form-control').value
  // 3.2 GENERATE THE TODO HTML
  // console.log(titleValue);
  const itemHTML = `<div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
    <input class="d-flex form-check-input me-1" type="checkbox">
    <div>${titleValue}</div>
  </div>`
  // 3.3 ADD TO THE LIST
  container.insertAdjacentHTML('beforeend', itemHTML)
})
