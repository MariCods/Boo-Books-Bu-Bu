import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
  me {
    _id
    savedBooks {
      bookId
      bookAuthor
      bookDescription
      image
      link
      title
    }
    bookCount
  }
}
  
`