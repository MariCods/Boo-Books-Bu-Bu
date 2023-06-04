const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    email: String!
    bookCount: Int
    savedBooks: [Book]!
}

type Book {
    bookId: ID!
    bookAuthor: [String]!
    bookDescription: String
    image: String!
    link: String!
    title: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
  
    me: User!
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`





module.exports = typeDefs;