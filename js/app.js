"use strict"

let $ = document;

let titleInput = $.querySelector('#title')
let authorInput = $.querySelector('#author')
let yearInput = $.querySelector('#year')
let addBtnElem = $.querySelector('.add-btn')
let containerBox = $.querySelector('#book-list')

let books = []


function createObject(event) {
    event.preventDefault()
    let titleValue = titleInput.value
    let authorValue = authorInput.value
    let yearValue = yearInput.value

    if (titleValue === '', authorValue === '', yearValue === '' || isNaN(yearValue)) {

        alert(' لطفا تمامی فیلدها را پر نمایید')

    } else {
        let newBook = {
            titleValue,
            authorValue,
            yearValue
        }
        books.push(newBook)
        saveToLocalStorage(books)
    }

}


function saveToLocalStorage(booksArray) {
    localStorage.setItem('books', JSON.stringify(booksArray))
    showDataToDom(booksArray)
}

function showDataToDom(booksArray) {
    containerBox.innerHTML = ''

    booksArray.forEach(book => {
        containerBox.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${book.titleValue}</td>
            <td>${book.authorValue}</td>
            <td>${book.yearValue}</td>
        </tr>
        `)
    })
    clearInput()
}

function getDataToLocalStorage() {
    let dataLocalStorage = localStorage.getItem('books')
    let convertFormat = JSON.parse(dataLocalStorage)  //convert formating
    showDataToDom(convertFormat)
}


function clearInput() {
    titleInput.value = ''
    authorInput.value = ''
    yearInput.value = ''
}

addBtnElem.addEventListener('click', createObject)

window.addEventListener('load', getDataToLocalStorage)


