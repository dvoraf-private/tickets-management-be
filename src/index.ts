import express, { Request, Response } from 'express';
import cors from 'cors';
import {getTickets} from "./services/ticketService";


const app = express();
const port = process.env.PORT || 3008;

app.use(cors())
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.get('/tickets', (req, res) => {
    const userType = req.query?.userType;
    const page = parseInt(req.query?.page as string) || 1;
    const limit = parseInt(req.query?.limit as string) || 10;

    const ticketsData = getTickets(userType as string, page, limit);

    res.json({
        totalTickets: ticketsData.length,
        totalPages: Math.ceil(ticketsData.length / limit),
        currentPage: page,
        tickets: ticketsData
    });

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


