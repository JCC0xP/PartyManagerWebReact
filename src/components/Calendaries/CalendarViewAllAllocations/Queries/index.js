const selectAllAllocations = `
    query SelectAllAllocations ($date: String) {
        allAllocations (
            date: $date
        ) {
            amount
            date
            type
            allocationsOfDay {
                avatar
                decoration
                name
                date
                type
                street
                phone
            }
        }
    }
`;

export { selectAllAllocations };
