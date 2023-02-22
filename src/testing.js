import * as dotenv from "dotenv";
import * as utils from "./utils/utils.js"
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




//Handle bars for dyanamic templating
import  hbs from "hbs"
app.set('view engine','hbs')

//This is required when the default view folder is not views but something else like templates
app.set('views',viewsPath)

//registering partials to render partials
hbs.registerPartials(partialsPath)

//setup static directory to server
app.use(express.static(publicDirectory))

app.get('',(req,res)=>{
  res.render('index',{
    body:"This is a demo chatGPT page!",
      title:"ChatGPT-Testing",
      name:"Ravi Gajul"
  })
})
app.get('/index',(req,res)=>{
  const textPrompt = req.query.prompt
  debugger
   if(!textPrompt){
   return res.send("Please type your query")
  } 
  /* const configuration = new Configuration({
    //retrieving the api key from env file
    apiKey: process.env.OPENAI_API_KEY,
  }); */
  debugger
  utils.getResponse(textPrompt , (data)=>{
    debugger
    console.log(data)
    res.send(
      {
      body:"This is a demo chatGPT page!",
      title:"ChatGPT-Testing",
      name:"Ravi Gajul",
      result:data
    })
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

/* var prompt= process.argv[2]
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
res .send(response.data.choices[0].text)
})*/


app.listen(3001,()=>{
    console.log('The server is up and running in 3 seconds')
    console.log('open a browser and invoke localhost:3000/help')
})

