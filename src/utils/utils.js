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
          "Basic "+ process.env.JIRA_API_KEY,
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


export const extractTestScenarios=(jsonObj)=> {
 // const obj = JSON.parse(jsonObj);
  const choices = obj.choices;

  const scenarios = [];
  for (let i = 0; i < choices.length; i++) {
    const text = choices[i].text;
    const match = text.match(/Scenario: [\s\S]*?(?=Scenario:|$)/g);
    if (match) {
      scenarios.push(match);
    }
  }

  return scenarios;
}
