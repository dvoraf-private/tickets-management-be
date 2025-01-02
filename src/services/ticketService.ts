import tickets from "../templates/ticketsData";

const getTickets = (userType: string, page: number, limit: number ) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const filteredTickets = tickets.filter(ticket => ticket.userType === userType);
    const data = filteredTickets.slice(startIndex, endIndex);
    return data

}

export {getTickets}