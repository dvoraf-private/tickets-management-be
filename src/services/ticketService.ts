const tickets = [
    // Example tickets data
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 3, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    { id: 1, title: 'Event 1', description: 'Description 1', date: '2023-10-01', location: 'Location 1', userType: 'local' },
    { id: 2, title: 'Event 2', description: 'Description 2', date: '2023-10-02', location: 'Location 2', userType: 'tourist' },
    // ... add more tickets as needed
];

const getTickets = (page: any, limit: any ) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const data = tickets.slice(startIndex, endIndex);
    return data

}

export {getTickets}