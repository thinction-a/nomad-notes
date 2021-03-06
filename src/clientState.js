export const defaults = {
    notes: [
        {
            __typename: "Note",
            id: 1,
            title: "First",
            content: "Second"
        }
    ]
};
export const typeDefs = [
    `
    schema {
        query: Query
        mutation: Mutation
    }
    type Query {
        notes: [Note]!
        note(id: Int!): Note
    }
    type Mutation {
        createNote(title: String!, content: String!): Note
        editNote(id: String!, title: String!, content: String!): Note
    }
    type Note {
        id: Int!
        title: String!
        content: String!
    }
    `
];
export const resolvers = {
    Mutation: {},
    Query: {}
};