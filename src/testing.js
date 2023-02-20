import * as dotenv from "dotenv";
//loading the .env configuration
dotenv.config();
import { Configuration, OpenAIApi } from "openai";
import  express  from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const publicDirectory = path.join(__dirname,'../public')
const imageSource = path.join(__dirname,"../public/img")
const viewsPath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")

////to render static html pages
//app.use(express.static(publicDirectory))

//Handle bars for dyanamic templating
import  hbs from "hbs"
app.set('view engine','hbs')

//This is required when the default view folder is not views but something else like templates
app.set('views',viewsPath)

//registering partials to render partials
hbs.registerPartials(partialsPath)

app.get('/index',(req,res)=>{
  if(!req.query.ask){
    res.send("Please type your query")
  }
  res.render('index',{
    body:"This is a demo chatGPT page!",
    title:"ChatGPT-Testing",
    name:"Ravi Gajul"
  })
})

app.get('/help',(req,res)=>{
  res.render('help',{
    body:"If you need any help with the app, please contact me at ravi.gajul@icloud.com.\nYou can also refer to our documentation for detailed instructions on using the app and integrating the APIs.",
    title:"Help",
    name:"Ravi Gajul"
  })
})

app.get('/about',(req,res)=>{
  res.render('about',{
    body:"Welcome to the ChatGPT UI app! Here, you can easily integrate ChatGPT APIs with your UI and create amazing chatbots.",
    title:"About",
    name:"Ravi Gajul"
  })
})

var prompt= process.argv[2]
app.get('/ask',async (req,res)=>{
 const configuration = new Configuration({
  //retrieving the api key from env file
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: req.query.search,
  max_tokens: 1024,
  temperature: 0.1,
});
console.log(response.data.choices[0].text) 
res.send(response.data.choices[0].text)
})


app.listen(3000,()=>{
    console.log('The server is up and running in 3 seconds')
    console.log('open a browser and invoke localhost:3000/help')
})

