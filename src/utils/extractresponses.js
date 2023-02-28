import * as utils from "./utils.js"
const jsonObj = '{"id":"cmpl-6os81sryWPOYZBIka5f24Sm3JptdF","object":"text_completion","created":1677582489,"model":"text-davinci-003","choices":[{"text":"\n\nScenario: User successfully logs in\nGiven the user is on the login page\nWhen the user enters valid credentials\nThen the user should be successfully logged in\n\nScenario: User unsuccessfully logs in\nGiven the user is on the login page\nWhen the user enters invalid credentials\nThen the user should be shown an error message","index":0,"logprobs":null,"finish_reason":"stop"}],"usage":{"prompt_tokens":11,"completion_tokens":69,"total_tokens":80}}';
const testScenarios = utils.extractTestScenarios(JSON.parse(jsonObj))
console.log(testScenarios);
