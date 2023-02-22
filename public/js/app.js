//import * as utils from '../../src/utils/utils'
//dotenv.config();
//import { Configuration, OpenAIApi } from "openai";
console.log("app.js client side javascript is loaded!!");
const textForm = document.querySelector("form");
const textSearchValue = document.querySelector("#myTextArea");
const txtResult = document.querySelector("#result");
textForm.addEventListener("submit", (e) => {
  //prevent the browser from refreshing
  e.preventDefault();
  //const params = new URLSearchParams();
  //params.append("prompt", "index");
  //fetch('http://localhost:3000/index?prompt='+params)
  // debugger
  //console.log("sending request");
  // alert(textSearchValue);
  // document.querySelector("#result").textContent = "dddd";
  //encodeURIComponent(document.querySelector('#myTextArea').value)
  //alert('inside event handler')
  //alert('http://localhost:3000/index?prompt=' +  encodeURIComponent(document.querySelector('#myTextArea').value))
  //window.location.href='http://localhost:3000/index?prompt=' +  encodeURIComponent(document.querySelector('#myTextArea').value)
  /*fetch('/index?prompt=' + "newTest").then((response)=>{
   
    response.json().then((data)=>{
        // debugger
        alert('ok')
        // if(data.error){
        //     console.log(data.error)
        //     messageOne.textContent = data.error
        //     messageTwo.textContent = ""
        // }else{
          document.querySelector('#result').textContent = data
        //     messageTwo.textContent =data.forcast
        //     console.log(data.location)
        //     console.log(data.forcast)
        // // 
      })})
    
    */
  const prompt = textSearchValue.value;
  debugger;
  fetch('/index?prompt=' + encodeURIComponent(prompt))
    .then((response) => {
     response.json().then((data)=>{
      txtResult.textContent=data.result.choices[0].text
     })
    })
    .catch((error) => {
      console.log("Error occurred: ", error);
    });
});
