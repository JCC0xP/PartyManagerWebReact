const createDecoration = `
    mutation createDecoration($name: String!, $avatar: String!, $amount: Int!) {
        createDecorations(
            name: $name
            avatar: $avatar
            amount: $amount
        ) {
            _id
            key
            name
            avatar
            amount
        }
    }
`;

export { createDecoration };
