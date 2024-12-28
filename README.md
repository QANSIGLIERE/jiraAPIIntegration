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

### And now You can make any API call to Your JIRA

```
var { JIRA_API } = require('qansigliere-jira-api-integration');

(async function Demo() {
    let new_integration = new JIRA_API();
    let resp = await new_integration.download_search_jql('STATUS CHANGED AFTER -2W ORDER BY created DESC');
    console.log(JSON.stringify(resp));
})();
```

## API Documentation

### Issue search

JIRA documentation is present
[here](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/#api-group-issue-search)

#### Search for issues using JQL enhanced search (GET)

```
let new_integration = new JIRA_API();
let resp = await new_integration.download_search_jql('STATUS CHANGED AFTER -2W ORDER BY created DESC');
```

### Issues

JIRA documentation is present
[here](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-group-issues)

#### Get issue

```
let new_integration = new JIRA_API();
let resp = await new_integration.get_issue('10178');
```

### Issue fields

JIRA documentation is present
[here](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-fields/#api-group-issue-fields)

#### Get fields

```
let new_integration = new JIRA_API();
let resp = await new_integration.get_field();
```

## Related Videos

-   https://www.youtube.com/live/KxL0Eg5wmJU?si=W_vYh5f2prU6bBkA
