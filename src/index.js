import express from 'express';

const app = express();

const port = 4000;

app.get('/', (req, res) => res.send('Holby Training Solutions'));

app.listen(port, () => console.log(`Server running on Port ${port}`));
