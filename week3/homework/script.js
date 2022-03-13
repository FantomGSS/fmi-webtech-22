const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letterPosition = 3;

function remove() {
  if (letterPosition === 0) {
    return;
  }

  let list = document.querySelector('ol');
  list.removeChild(list.lastElementChild);
  letterPosition--;
}

function add() {
  if (letterPosition === 26) {
    return;
  }

  let node = document.createElement('li');
  node.appendChild(document.createTextNode(alphabet[letterPosition]));
  document.querySelector('ol').appendChild(node);
  letterPosition++;
}


