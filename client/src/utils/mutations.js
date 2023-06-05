import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        bookCount
        email
        savedBooks {
          bookId
          bookAuthor
          bookDescription
          image
          link
          title
        }
      }
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        bookCount
        savedBooks {
          bookId
          bookAuthor
          bookDescription
          image
          link
          title
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    bookCount
    email
    savedBooks {
      bookId
      bookAuthor
      bookDescription
      image
      link
      title
    }
  }
}
`;


export const REMOVE_BOOK = gql`
mutation Mutation($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      email
      bookCount
      savedBooks {
        bookId
        bookAuthor
        bookDescription
        image
        link
        title
      }
    }
  }
`;