const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Patient{
    _id: ID
    patientName: String
    patientLastName: String 
    patientPhone: String
    patientBirthdate: String
    patientEmail: String
    patientpassword: String
    role: String
}
type Query {
    patients: [Patient]
  }
`;

module.exports = typeDefs;