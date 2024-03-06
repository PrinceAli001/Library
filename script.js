let inputText = document.querySelector('#author')
let inputTitle = document.querySelector('#title')
let inputPages = document.querySelector('#pages')
let inputStatus = document.querySelector('#read-status')
let btn = document.querySelector('#btn')
let bookShelf = document.querySelector('#book-shelf')
let newBook = document.querySelector('#new-book')
let dialog = document.querySelector('dialog')
let currentBookNumber = 0;


const myLibrary = [];


function books(title,author,noOfPages,status) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.status = function () {
      return (status == 'true') ? 'has been read' : 'not yet read';
    };
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${this.status()}`;
    }
}

function addBookToLibrary() {
    let author = inputText
    let title = inputTitle
    let pages = inputPages
    let readStatus = inputStatus

    inputText.focus()    

    btn.addEventListener('click',function (event) {
      event.preventDefault()
      let book = new books(`${title.value}`,`${author.value}`,`${pages.value}`,`${readStatus.value}`)

      myLibrary.push(book)
      function makecard () {
          let containerDiv = document.createElement('div')
          containerDiv.setAttribute('style','height: fit-content; width: fit-content;')

          let cancelBtn = document.createElement('button')
          cancelBtn.textContent = 'x'
          cancelBtn.classList.add('red-button')
          cancelBtn.addEventListener('click', () => {
            bookShelf.removeChild(containerDiv)
          })

          let card = document.createElement('div')
          card.setAttribute('style','border: 1px solid black; width: 165px; height: fit-content; border-radius: 5px; box-shadow: 1px 1px 3px black;')

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

          let pStatus = document.createElement('p')
          pStatus.setAttribute('style','margin: 5px;')
          pStatus.textContent = `Status: ${book.status()}`

          

          card.appendChild(pictureHolder)
          card.appendChild(pTitle)
          card.appendChild(pAuthor)
          card.appendChild(pPages)
          card.appendChild(pStatus)
          containerDiv.appendChild(cancelBtn)
          containerDiv.appendChild(card)
          bookShelf.appendChild(containerDiv)
      }
      makecard()
    })
}
addBookToLibrary()


newBook.addEventListener('click', () => {
  dialog.showModal()
})