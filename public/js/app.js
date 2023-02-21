console.log('app.js client side javascript is loaded!!')
const textForm = document.querySelector('form')
const textSearchValue = document.querySelector('#myTextArea').value
const txtResult = document.querySelector('#result')
textForm.addEventListener('submit',(e)=>{
  //prevent the browser from refreshing
  e.preventDefault()
  const params = new URLSearchParams()
  params.append('prompt', textSearchValue);
  debugger
  console.log('sending request')
  fetch('http://localhost:3000/index?prompt=' + document.querySelector('#myTextArea').value)
  .then(response => response.json())
  .then(data => {
    txtResult.textContent = data.choices[0].text;
  })
  .catch(error => {
    console.log(error);
  });
})
