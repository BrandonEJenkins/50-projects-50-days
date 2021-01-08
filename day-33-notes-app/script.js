const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes')); // fetch and return parsed array
// console.log(notes);

// checks for notes in localStorage, and calls addNewNote to add it to the DOM
if (notes) {
  notes.forEach(note => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>

      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked(text); // marked() enables use of the marked library to use markdown

  deleteBtn.addEventListener('click', () => {
    note.remove();

    updateLS();
  })

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
  })

textArea.addEventListener('input', (e) => {
  const { value } = e.target;

  main.innerHTML = marked(value);

  updateLS();
})

  // render the innerHTML above into the dom (into the browser body)
  document.body.appendChild(note);
}


function updateLS() {
  const notesText = document.querySelectorAll('textarea'); // querySelectorAll returns node list

  const notes = [];

  notesText.forEach(note => notes.push(note.value)); // add each note to the empty array

  console.log(notes);

  localStorage.setItem('notes', JSON.stringify(notes)); // stringified array of note 1, note 2 stored in localStorage
}


// EXAMPLES OF USING localStorage

// // localStorage.setItem('name', 'Brandon');
// localStorage.setItem('name', 'Brandon');
// localStorage.getItem('name');
// localStorage.removeItem('name');

// // can only store strings in localStorage; use JSON.stringify to store other character types
// localStorage.setItem('name', JSON.stringify());
// JSON.stringify(localStorage.getItem('name'));