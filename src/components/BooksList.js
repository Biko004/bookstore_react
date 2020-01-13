import React from 'react'
import BookItem from './BookItem'
import { getBooks } from '../lib/api'

class BooksList extends React.Component {
    constructor(props){
        super(props);

        this.state={
            books: []
        }
    }


    getAllBooks() {
        getBooks().then(newBooks => {
            this.setState({books: newBooks.data})
        })
    }


    componentDidMount() {
        this.getAllBooks();
    }


    render(){
        let books = this.state.books
        return(
            <div>
                 {(books.map((book, i) => <BookItem key={i} id={book.id} name={book.name} author={book.author} year={book.year} />))}
            </div>
        )
    }
}

export default BooksList