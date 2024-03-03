const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require('axios');

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:8080' 
  })
);



let chatText = '';
//POST endpoint for later use for openAI
app.post('/chatEndpoint', (req, res) => {
  const { text } = req.body;
  console.log('Text received successfully to chatEndpoint:', text);
   chatText = text; 
  res.json({ message: 'Text received successfully' });
});

// Sending chat request to openAI
app.get('/getChatCompletion', async (req, res) => {
  const apiKey = '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'; 
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const data = {
    model: 'gpt-3.5-turbo',
    temperature: 0.2,
    max_tokens: 1000,
    messages: [
      { role: 'user', content: chatText }
    ]
  };

  try {
    const response = await axios.post(apiUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const completion = response.data.choices[0].message.content;
    res.send(completion);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});



// Making request to university API to collect all universities in Sweden
let universityName = '';

app.get('/universities', async (req, res) => {
  try {
    const response = await axios.get(`http://universities.hipolabs.com/search?country=sweden&name=${universityName}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/uniEndpoint', (req, res) => {
  const { text } = req.body;
  console.log('Received text:', text);
  universityName = text; 
  res.json({ message: 'Text received successfully' });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
