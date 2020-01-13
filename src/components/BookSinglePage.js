import React from 'react'
import { getSingleBook } from '../lib/api'

class BookSinglePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            book: '',
        }
    }

    getBook() {
        let book_id = this.props.match.params['id']
        getSingleBook(book_id).then(newBook => {
            this.setState({book: newBook.data})
        })
    }
    componentDidMount(){
        this.getBook();
    }


    render(){
        let book = this.state.book
        return(
            <div>
                <h1>This is a book page</h1>
                <span>{book.name}</span>
                <span>By {book.author}, {book.year}</span>
            </div>
        )
    }
}

export default BookSinglePage