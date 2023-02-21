import request from "postman-request"
export const getResponse = (apiKey,txtprompt,callback)=>{
    debugger
    var options = {
        'method': 'POST',
        'url': 'https://api.openai.com/v1/completions',
        'headers': {
          'Authorization': 'Bearer apiKey',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "model": "text-davinci-003",
          "prompt": txtprompt,
          "max_tokens": 4000,
          "temperature": 0.1
        })
       
      
      };
     
      request(options, function (error,response) {
        debugger
        if (error) throw new Error(error);
        const data=JSON.parse(response.body)
        console.log(data)
        callback(undefined,data.choices[0].text);
      });  
}


