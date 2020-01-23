import axios from 'axios';


const baseUrl = 'http://localhost:7002';


export function getBooks() {
  return axios.get(`${baseUrl}/books`);
}


export function getSingleBook(book_id) {
    return axios.get(`${baseUrl}/get_book?id=${book_id}`);
  }


export function updateBook(updatedBook) {
    return axios.post(`${baseUrl}/update_book`, updatedBook);
}



export function addBook(newBook){
    return axios.post(`${baseUrl}/add_book`, newBook);
}