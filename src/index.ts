import express, { Request, Response } from 'express';
import morgan from 'morgan';

const notes = [
    {"id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
];

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
morgan.token('body', (req: Request) => {
  return JSON.stringify(req.body);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));


app.get('/api/persons', (req: Request, res: Response) => {
  res.json(notes);
});

app.get('/info', (req: Request, res: Response) => {
  const currentTime = new Date().toString();
  res.send(`<h2>Phonebook has info for ${notes.length} people</h2>
    <br/><p>${currentTime}</p>`);
});

app.get('/api/persons/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const person = notes.find(note => note.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).send({ error: 'Persona not found' });
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const personIndex = notes.findIndex(note => note.id === id);
  if (personIndex !== -1) {
    notes.splice(personIndex, 1);
    return res.status(204).end();
  } else {
    return res.status(404).json({ error: 'Person not found' });
  }
});

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body;
  if (!name || !number) {
    return res.status(400).json({
      error: 'Falta el nombre o número',
    });
  }
  const nameExists = notes.some(note => note.name === name);
  if (nameExists) {
    return res.status(400).json({
      error: 'El nombre ya existe en la agenda',
    });
  }

  const newId = Math.floor(Math.random() * 999999);
  const newPerson = {
    id: newId,
    name,
    number
  };
  notes.push(newPerson);
  res.status(201).json(newPerson);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
