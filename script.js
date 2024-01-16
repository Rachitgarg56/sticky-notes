const textArea = document.querySelector('textarea');
const inputColor = document.querySelector('#inputs>input');
const addNoteBtn = document.querySelector('.main>button');
const notes = document.querySelector('.notes-container');
const para = document.querySelector('.right>p');
let crossBtns = document.querySelectorAll('.cross-btn');

function handleAddNote(e) {
    
    const inputText = textArea.value;
    const color = inputColor.value;

    textArea.value = '';

    if (inputText == '') {
        alert("Enter some text");
        return;
    }

    para.style.display = 'none';

    var note = document.createElement('div');
    var crossBtn = document.createElement('button');
    crossBtn.innerText = 'X';

    crossBtn.classList.add('cross-btn');

    note.style.backgroundColor = color;

    note.innerText = inputText;
    note.appendChild(crossBtn);

    notes.appendChild(note);

    crossBtns = document.querySelectorAll('.cross-btn');
    crossBtns.forEach((btn) => {
        btn.addEventListener('click', handleCrossBtnClick);
    });

};

function handleCrossBtnClick (e) {
    const note = e.target.parentNode;
    note.outerHTML = "";

    if (notes.innerHTML ==- '') {
        para.style.display = 'block';
    }
};


addNoteBtn.addEventListener('click', handleAddNote);













