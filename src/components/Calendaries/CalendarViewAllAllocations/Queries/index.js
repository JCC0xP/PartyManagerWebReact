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
                title
                description
                date
            }
        }
    }
`;

export { selectAllAllocations };
