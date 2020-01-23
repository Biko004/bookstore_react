import React from 'react'
import { addBook } from '../lib/api'


class BookAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                author: '',
                year: ''
        }
    }


    handleOnFormSubmit(e) {
        e.preventDefault();
        let book = this.state
        const execute = async () => {
            try {
                const response = await addBook(book);
            } catch (error) {
                console.log("Didn't post for some reason: " + error)
            }
        }
        execute();

        this.setState({name: '',author: '',year: ''})
    }



    handleNameChange(e){
        this.setState({  name: e.target.value})
    }

    handleAuthorChange(e){
        this.setState({ author: e.target.value})
    }

    handleYearChange(e){
        this.setState({  year: e.target.value})
    }


    render() {
        let {name, author, year} = this.state

        return (

                    <div>
                        <h1>{this.props.name}</h1>
                        <form onSubmit={e => this.handleOnFormSubmit(e)}>
                            <label>Book name:</label><input onChange={event=> this.handleNameChange(event)} type="text" name="name" value={name}/>
                            <label>Book Author:</label><input onChange={event=> this.handleAuthorChange(event)} type="text" name="author" value={author}/>
                            <label>Book Year:</label><input onChange={event=> this.handleYearChange(event)} type="text" name="year" value={year}/>
                            <button className="submit-post" type="submit" value="Add Book">Submit</button>
                        </form>
                    </div>

                )
            }
    }
                    
                    
                    
export default BookAddForm