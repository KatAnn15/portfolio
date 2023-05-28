const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const dotenv = require("dotenv")

dotenv.config();
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json())

app.post('/contact-form', async (req, res) => {
    const msg = {
        to: 'katherineviegh@gmail.com',
        from: 'katherineviegh@gmail.com', 
        subject: `From ${req.body.name} (${req.body.email}): ${req.body.subject}`,
        text: req.body.message,
      }
      try {
        await sgMail.send(msg);
        res.json({message: "Thank you for your interest. I will get back to you as soon as possible!"})
      }catch(error) {
        throw new Error(String(error))
      }
    
});

app.listen(PORT, () => {
    console.log('Liestening to port ' + PORT)
});