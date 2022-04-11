import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String, password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookID: ID!, $description: String!, $title: String!, $link: String, $authors: [String]) {
        saveBook (bookID: $bookID, description: $description, title: $title, link: $link, authors: $authors){
        _id
        username
        email
        savedBooks {
            bookId
            authors
            title
            description
            image
        }
    }
}`;

export const REMOVE_BOOK = gql`
    mutation removeBook 
    removeBook(bookId: $bookId) {
        _id
        username
        savedBooks {
        bookId
        authors
        description
        title
        image
        }
      }
    }`;
