const addBtn = document.querySelector('.addBtn');
const noteContainer = document.querySelector('.notes-container');

let clickCount = 0;

addBtn.addEventListener('click', () => {
  if (clickCount < 2) { 
    let pTag = document.createElement('p');
    let addbutton = document.createElement('button');
    addbutton.className = "deleteBtn";
    pTag.setAttribute('contenteditable', 'true');
    addbutton.textContent = "Delete";
    pTag.textContent = "";
    noteContainer.appendChild(pTag);
    noteContainer.appendChild(addbutton);

    let deleteMessage = document.createElement('span')
    deleteMessage.className = 'deleteMsg';
    deleteMessage.textContent = "Deleted Suceesfully";

    addbutton.addEventListener('click', () => {
        noteContainer.appendChild(deleteMessage);
         setTimeout(() => {
        deleteMessage.style.display = 'none';
      }, 2000);

    });

    addbutton.addEventListener('click', () => {
      pTag.remove();
      addbutton.remove();
      clickCount--; 
    });

    clickCount++; 
  }
});


