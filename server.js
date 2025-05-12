import path from 'path';
import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(process.cwd(), 'client/dist')));

app.listen(PORT, handleOnStart);


function handleOnStart() {
    console.log('Server up and running on the port: ' + PORT);
}