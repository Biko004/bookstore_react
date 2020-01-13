import React from 'react'
import { getBooks } from '../lib/api'

class BookItem extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <a href={'/book/' + this.props.id}>{this.props.name}</a>
                <span>  ,By {this.props.author}, {this.props.year}</span>
            </div>
        )
    }
}

export default BookItem