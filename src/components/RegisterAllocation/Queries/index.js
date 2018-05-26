const createAllocations = `
    mutation CreateAllocations ($avatar: String!, $decoration: String!, $phone: String!, $date: String!, $type: String!, $name: String!, $email: String!) {
        createAllocations(
            avatar: $avatar
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

export { createAllocations };
