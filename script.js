let inputText = document.querySelector('#author')
let inputTitle = document.querySelector('#title')
let inputPages = document.querySelector('#pages')
let inputStatusOne = document.querySelector('#read-status-one')
let inputStatusTwo = document.querySelector('#read-status-two')
let btn = document.querySelector('#btn')
let bookShelf = document.querySelector('#book-shelf')
let newBook = document.querySelector('#new-book')
let dialog = document.querySelector('dialog')
let x = document.querySelector('#x')
let paraOne = document.querySelector('#para1');
let paraTwo = document.querySelector('#para2');
let paraThree = document.querySelector('#para3');
const myLibrary = [];


class books {
  constructor(title,author,noOfPages){
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
  }
   
    status() {
      return (inputStatusOne.checked) ? 'has been read' : 'not yet read';
    };
    info() {
        return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${this.status()}`;
    }
}


function addBookToLibrary() {
    let author = inputText
    let title = inputTitle
    let pages = inputPages
   

    btn.addEventListener('click',function (event) {
      event.preventDefault()
      let book = new books(`${title.value}`,`${author.value}`,`${pages.value}`)

      myLibrary.push(book)
      function makecard () {
          let containerDiv = document.createElement('div')
          containerDiv.setAttribute('style','height: fit-content; width: fit-content;')
          containerDiv.setAttribute('data-number',`${myLibrary.indexOf(book)}`)

          let cancel = document.createElement('button')
          cancel.textContent = 'x'
          cancel.classList.add('red-button')
          cancel.addEventListener('click', () => {
            bookShelf.removeChild(containerDiv)
            myLibrary.splice(containerDiv.dataset.number,1)
            containerDiv.setAttribute('data-number',`${myLibrary.indexOf(book)}`);
          })

          let card = document.createElement('div')
          card.setAttribute('style','border: 1px solid black; width: 165px; height: fit-content; border-radius: 5px; box-shadow: 1px 1px 3px black; background-color: #c0c0c0;')

          let pictureHolder = document.createElement('div')
          pictureHolder.setAttribute('style','background-image: url(images/book.gif); background-position: center; background-size: contain; border: 1px solid black; height: 120px;')

          let pTitle = document.createElement('p')
          pTitle.setAttribute('style','margin: 5px;')
          pTitle.textContent = `Title: ${book.title}`

          let pAuthor = document.createElement('p')
          pAuthor.setAttribute('style','margin: 5px;')
          pAuthor.textContent = `Author: ${book.author}`

          let pPages = document.createElement('p')
          pPages.setAttribute('style','margin: 5px;')
          pPages.textContent = `Pages: ${book.noOfPages}`

          let pStatus = document.createElement('button')
          pStatus.classList.add('green-btn')
          if (inputStatusOne.checked) {
            pStatus.textContent = 'Read'
          } else {
            pStatus.textContent = 'Not Read'
            pStatus.classList.add('red-button')
            pStatus.setAttribute('style','margin: 20px auto; border-radius: 5px; padding: 5px 15px;')
          }
          pStatus.addEventListener('click',() => {
            if ( pStatus.textContent == 'Read') {
              pStatus.textContent = 'Not Read'
              pStatus.classList.add('red-button')
              pStatus.setAttribute('style','margin: 20px auto; border-radius: 5px; padding: 5px 15px;')
            } else {
              pStatus.textContent = 'Read'
              pStatus.classList.remove('red-button')
              pStatus.classList.add('green-btn')
            }
          })

          card.appendChild(pictureHolder)
          card.appendChild(pTitle)
          card.appendChild(pAuthor)
          card.appendChild(pPages)
          card.appendChild(pStatus)
          containerDiv.appendChild(cancel)
          containerDiv.appendChild(card)
          bookShelf.appendChild(containerDiv)

      }
      makecard()
    })
}

function checkError(input,para){
    if (input.validity.valueMissing) {
        showError(para,'error1',input);
    } else if(input.validity.tooShort) {
        showError(para,'error2',input);
    } else if(input.validity.tooLong) {
        showError(para,'error3',input)
    }
}

function showError(paragraph,errortype,input){
    if ((paragraph === paraOne
        && errortype === 'error1')
      ||
        (paragraph === paraTwo
        && errortype === 'error1')) {
      paragraph.textContent = 'Enter the required text';
      paragraph.classList.add('error');
    } else if((paragraph === paraOne
      && errortype === 'error2'
      && input.value.length < 3)
    ||
      (paragraph === paraTwo
      && errortype === 'error2'
      && input.value.length < 3)) {
        paragraph.textContent = 'Text is too short, minimum of 3 characters required';
        paragraph.classList.add('error');
      }
}

addBookToLibrary()


newBook.addEventListener('click', () => {
  dialog.showModal()
})
x.addEventListener('click', () => {
  dialog.close()
})
inputText.addEventListener('input', () => {
  if (inputText.validity.valid) {
    paraOne.textContent = '';
    paraOne.classList.remove('error');
  } else {
    checkError(inputText,paraOne);
  }
});
inputTitle.addEventListener('input', () => {
  if (inputTitle.validity.valid) {
    paraTwo.textContent = '';
    paraTwo.classList.remove('error');
  } else {
    checkError(inputTitle,paraTwo);
  }
});
