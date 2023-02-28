import request from "postman-request";
export const getResponse = (txtprompt, callback) => {
  debugger;
  var options = {
    method: "POST",
    url: "https://api.openai.com/v1/completions",
    headers: {
      Authorization: "Bearer " + process.env.OPENAI_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: txtprompt,
      max_tokens: 4000,
      temperature: 0.1,
    }),
  };

  try {
    request(options, (error, response) => {
      debugger;
      if (error) {
        throw new Error(error);
      }

      const data = JSON.parse(response.body);
      //console.log("This is the text data" + data.choices[0].text)
      callback(data);
    });
  } catch (err) {
    console.error(err);
    callback(null, err);
  }
};

export const postToJira = (postData,callback) => {
  {
    var options = {
      method: "POST",
      url: "https://openaipocjira.atlassian.net/rest/api/2/issue/",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic cmF2aS5nYWp1bDIyQGdtYWlsLmNvbTpBVEFUVDN4RmZHRjBuV3VVZzVTNmJGUFZud0I2a29iYkctVjUwdmNzY0x5YzRzcG9mTzY3NVRwNVI0WGRnYldWb2pLVVdkMmkyNTc4Nzdkd2ZiR0EydmlJVUJ6NFlZZEhKV241SGhuU29oQVFEUW1COFdjeE02S0xtZzNNTy10dzFSTjJCN0pTWWMtYXp3MkhIWk9kWmFFQVBRUjlWT3VKRTkxLU96bFhKR3VKS3dWdG1xZXVHRzg9NDY0QjhEQkI=",
      },
      body: JSON.stringify({
        fields: {
          project: {
            key: "OP",
          },
          summary: "Test Case Summary",
          description: postData,
          issuetype: {
            name: "TestCase",
          },
        },
      }),
    };
    try {
      request(options, (error, response) => {
        debugger;
        if (error) {
          throw new Error(error);
        }
        const data = JSON.parse(response.body);
        callback(data);
      });
    } catch (err) {
      console.error(err);
      callback(null, err);
    }
  }
};
