import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $String!, password: $String!) {
        _id
        email
        password
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    username: $String!, email: $String!, password: $String!
{
    _id
    username
    email
    password
}
}
`;

export const SAVE_BOOK = gql`
mutation saveBook( $bookId: ID!, $bookAuthor: [String!,$bookDescription: String, $title: String!, $image:String, link: String!){
  saveBook(bookId: $ID!, bookAuthor: $String!,bookDescription: $String, title: $String!, image:$String, link: $String!) {
      bookId
      bookAuthor
      bookDescription
      title
      image
      link

  }

}
`;


export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $ID!){
        bookId
    }
}
`;