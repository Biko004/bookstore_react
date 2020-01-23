import React from 'react'
import { getSingleBook, updateBook } from '../lib/api'
import BookAddForm from './BookAddForm'

class BookSinglePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            book: '',
            updatedBook: {},
            edit: false
        }
    }

    getBook() {
        let book_id = this.props.match.params['id']
        getSingleBook(book_id).then(newBook => {
            this.setState({book: newBook.data, updatedBook: newBook.data})
        })
    }
    
    componentDidMount(){
        this.getBook();
    }

    handleOnFormSubmit(e) {
        e.preventDefault();
        let updatedBook = this.state.updatedBook
        const execute = async () => {
            try {
                const response = await updateBook(Object.assign(updatedBook, {id: this.state.book.id}));
                this.getBook();
            } catch (error) {
                console.log("Didn't post for some reason: " + error)
            }
        }
        execute();
    }



    handleNameChange(e){
        let newName = e.target.value;
        this.setState(prevState => ({
            updatedBook: {
                ...prevState.updatedBook,
                name: newName
              }
            
          }))
    }

    handleAuthorChange(e){
        let newAuthor = e.target.value;
        this.setState(prevState => ({
            updatedBook: {
                ...prevState.updatedBook,
                author: newAuthor
              }
            
          }))
    }

    handleYearChange(e){
        let newYear = e.target.value;
        this.setState(prevState => ({
            updatedBook: {
                ...prevState.updatedBook,
                year: newYear
              }
            
          }))
    }

    render(){
        let book = this.state.book;
        let {name, author, year} = this.state.updatedBook

        console.log(this.state)

        return(
            <div>
                <div>
                    <h1>This is a book page</h1>
                    <p>Book name:  {book.name}</p>
                    <p>By {book.author}, on {book.year}</p>
                    <button onClick={()=>this.setState({edit: !this.state.edit})}>Edit book data</button>
                </div>
               {this.state.edit ?  <div>
                    <p>Update this book:</p>

                    <form onSubmit={e => this.handleOnFormSubmit(e)}>
                            <label>Book name:</label><input onChange={event=> this.handleNameChange(event)} type="text" name="name" value={name}/>
                            <label>Book Author:</label><input onChange={event=> this.handleAuthorChange(event)} type="text" name="author" value={author}/>
                            <label>Book Year:</label><input onChange={event=> this.handleYearChange(event)} type="text" name="year" value={year}/>
                            <button className="submit-post" type="submit" value="Add Book">Submit</button>
                    </form>
                </div> : ''}

            </div>
           
        )
    }
}

export default BookSinglePage