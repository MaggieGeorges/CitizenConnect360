import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes'; // Adjust the path as needed
import incidentsRouter from './routes/incidentsRouter';
import postsRouter from './routes/postsRouter';
import pollsRouter from './routes/pollsRouter';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route to respond to GET requests at the root URL
app.get('/', (req, res) => {
  res.send('Server is running');
});

// User routes
app.use('/api/users', userRoutes);
app.use('/api/incidents', incidentsRouter);
app.use('/api/posts', postsRouter); 
app.use('/api/polls', pollsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
