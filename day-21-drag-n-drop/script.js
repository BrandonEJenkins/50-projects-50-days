const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// fire specific events at certain times throughout drag and drop process
function dragStart() {
  console.log('drag start');
  this.className += ' hold';
  setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
  // console.log('drag end');
  this.className = 'fill';
}

function dragOver(event) {
  // console.log('drag over');
  event.preventDefault();
}

function dragEnter(event) {
  // console.log('drag enter');
  event.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  // console.log('drag leave');
  this.className = 'empty';
}

function dragDrop() {
  // console.log('drag drop');
  this.className = 'empty';
  this.append(fill);
}
