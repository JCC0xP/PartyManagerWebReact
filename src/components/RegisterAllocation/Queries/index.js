const createAllocations = `
    mutation CreateAllocations ($decoration: String!, $phone: String!, $date: String!, $type: String!, $name: String!, $email: String!) {
        createAllocations(
            decoration: $decoration
            phone: $phone
            date: $date
            type: $type
            name: $name
            email: $email
        ) {
            _id
            key
            avatar
            decoration
            date
            phone
            type
            name
            email
            street
        }
    }
`;

const allDecorations = `
    query allDecorations {
        allDecorations {
            key
            name
        }
    }
`;

export { createAllocations, allDecorations };
