var { get, post, post_file, download } = require('./axios_utils.js');

class JIRA_API {
    constructor(url, username, api_key) {
        this.url = url ? url : process.env.JIRA_URL;
        this.headers = {
            'user-agent': 'QANSIGLIERE',
            'content-type': 'application/json',
            accept: 'application/json',
            authorization:
                'Basic ' +
                btoa(
                    `${username ? username : process.env.JIRA_USERNAME}:${
                        api_key ? api_key : process.env.JIRA_APIKEY
                    }`,
                ),
        };
        this.headersFormData = {
            'user-agent': 'QANSIGLIERE',
            accept: 'application/json',
            authorization:
                'Basic ' +
                btoa(
                    `${username ? username : process.env.JIRA_USERNAME}:${
                        api_key ? api_key : process.env.JIRA_APIKEY
                    }`,
                ),
        };
    }

    async get_case_statuses() {
        return await get(this.url, 'index.php?/api/v2/get_case_statuses', this.headers);
    }

}

module.exports.JIRA_API = JIRA_API;
