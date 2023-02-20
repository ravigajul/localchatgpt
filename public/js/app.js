import { getResponse } from "../../src/utils/utils"

console.log('app.js client side javascript is loaded!!')
const textForm = document.querySelector('form')
const textSearch = document.querySelector('#myTextArea')
const txtResult = document.querySelector('#result')
textForm.addEventListener('submit',(e)=>{
  //prevent the browser from refreshing
  e.preventDefault()
  const txtPrompt = textSearch.value
  console.log(myTextArea)
  fetch('http://localhost:3000/index?prompt='+encodeURIComponent(txtPrompt)).then((response)=>{
    debugger
    txtResult.textContent=JSON.parse(response.body).choices[0].text
    
  })
})
