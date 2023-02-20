import { getResponse } from "../../src/utils/utils"

console.log('app.js client side javascript is loaded!!')
const textForm = document.querySelector('form')
const textSearch = document.querySelector('textarea')
const txtResult = document.querySelector('#result')
textForm.addEventListener('submit',(e)=>{
  //prevent the browser from refreshing
  e.preventDefault()
  const txtPrompt = textSearch.value
 /*  fetch('http://localhost:3000/index?prompt='+textSearch.value).then((response)=>{
    debugger
    console.log(response)
    txtResult.textContent=JSON.parse(response.body).choices[0].text
    
  }) */
  getResponse(textSearch.value)
})
