let inputText = document.querySelector('#author')
let inputTitle = document.querySelector('#title')
let inputPages = document.querySelector('#pages')
let inputStatus = document.querySelector('#read-status')
let btn = document.querySelector('#btn')



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

    btn.addEventListener('click',function () {
      let book = new books(`${title.value}`,`${author.value}`,`${pages.value}`,`${readStatus.value}`)

      myLibrary.push(book)
      console.log(myLibrary)
      console.log(book.status())
    })
}
addBookToLibrary()