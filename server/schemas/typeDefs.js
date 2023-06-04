const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
}

type Book {
    bookId: ID
    bookAuthor: [String]!
    bookDescription: String
    image: String
    link: String
    title: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
  
    me: User
  }

  input savedBooksInput {
     bookId: ID!
     bookAuthor: [String!]
     bookDescription: String
     title: String!
     image:String
     link: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(criteria: savedBooksInput):User
    removeBook(bookId: ID!): User
  }
`





module.exports = typeDefs;