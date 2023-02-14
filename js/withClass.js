let $ = document;
class books {
    constructor(titleValue, authorValue, yearValue) {
        this.title = titleValue
        this.author = authorValue
        this.year = yearValue
    }
}






class createBooks {
    constructor(container) {
        this.container = container
        this.titleInput = $.querySelector('#title')
        this.authorInput = $.querySelector('#author')
        this.yearInput = $.querySelector('#year')
        this.addBtn = $.querySelector('.add-btn')

        this.booksArray = JSON.parse(localStorage.getItem('books')) || []

        this.render()
    }

    render() {
        this.container.innerHTML = ''
        // console.log('rendering')
        this.getDataToLocalStorage()
        this.addBtn.addEventListener('click', (event) => {
            this.createObject(event)
        })


    }

    createObject(event) {
        event.preventDefault()
        let titleValue = this.titleInput.value
        let authorValue = this.authorInput.value
        let yearValue = this.yearInput.value

        if (titleValue === '', authorValue === '', yearValue === '' || isNaN(yearValue)) {

            alert(' لطفا تمامی فیلدها را پر نمایید')

        } else {
            this.booksArray.push(new books(titleValue, authorValue, yearValue))
            console.log(this.booksArray);
            this.saveInToLocalStorage()
        }

    }


    showDataToDom() {
        this.container.innerHTML = ''
        // console.log(this.booksArray);
        this.booksArray.forEach(book => {
            console.log(book)
            this.container.insertAdjacentHTML('beforeend', `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
        </tr>`)
        })

        // console.log('data showded')
        this.clearInput()
    }

    getDataToLocalStorage() {
        let dataLocalStorage = localStorage.getItem('books')//get data
        let convertFormat = JSON.parse(dataLocalStorage)  //convert formating
        this.showDataToDom(convertFormat)
    }

    clearInput() {
        this.titleInput.value = ''
        this.authorInput.value = ''
        this.yearInput.value = ''
    }

    saveInToLocalStorage() {
        localStorage.setItem('books', JSON.stringify(this.booksArray))
        console.log('data save shod');
        this.showDataToDom()
    }

}

new createBooks($.querySelector('#book-list'))