# qansigliere-jira-api-integration

The main idea of ​​this library created in the JavaScript language is to provide a ready-made set of API methods for
integration with JIRA

## Author

https://www.youtube.com/@QANSIGLIERE/

## Installation

Using npm `npm i qansigliere-jira-api-integration`

## How to use it

### Create a \*.env file

Create any \*.env file (like `jira.env`) and write the following information in the created file

```
export JIRA_URL="__YOUR_JIRA_URL__"
export JIRA_USERNAME="__YOUR_JIRA_EMAIL__"
export JIRA_APIKEY="__YOUR_JIRA_APIKEY__"
```

### Make the \*.env file works

Just run in the terminal the following command: `source yourfile.env`

### And now You can make any API call to Your TestRail

```
var { JIRA_API } = require('qansigliere-jira-api-integration');

(async function Demo() {
    let new_integration = new JIRA_API();
    let resp = await new_integration.get_templates(1);
    console.log(JSON.stringify(resp));
})();
```

## API Documentation

### Case Types

TestRail documentation is present [here](https://support.testrail.com/hc/en-us/articles/7077295487252-Case-Types)

#### get_case_types

```
let new_integration = new TestRail_API();
let resp = await new_integration.get_case_types();
```

## Related Videos

-   https://www.youtube.com/live/KxL0Eg5wmJU?si=W_vYh5f2prU6bBkA
