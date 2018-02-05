const express = require ('express');
const bodyParser = require ('body-parser');
const mc = require ('./controllers/messages_controller');

const mcLink = '/api/messages';

const app = express();

app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

app.get(mcLink, mc.read);
app.post(mcLink, mc.create);
app.put(`${mcLink}/:id`, mc.update);
app.delete(`${mcLink}/:id`, mc.delete);




const port = 3000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});