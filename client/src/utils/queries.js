import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
  me {
    _id
    savedBooks {
      bookId
      authors
      description
      image
      link
      title
    }
    bookCount
  }
}
  
`