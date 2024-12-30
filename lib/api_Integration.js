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
                    `${username ? username : process.env.JIRA_USERNAME}:${api_key ? api_key : process.env.JIRA_APIKEY}`,
                ),
        };
        this.headersFormData = {
            'user-agent': 'QANSIGLIERE',
            accept: 'application/json',
            authorization:
                'Basic ' +
                btoa(
                    `${username ? username : process.env.JIRA_USERNAME}:${api_key ? api_key : process.env.JIRA_APIKEY}`,
                ),
        };
    }

    async download_search_jql(jql) {
        return await download(this.url, `/rest/api/3/search/jql?jql=${jql}`, this.headers);
    }

    async get_issue(id) {
        return await get(this.url, `/rest/api/3/issue/${id}`, this.headers);
    }

    async get_field(id) {
        return await get(this.url, `/rest/api/3/field`, this.headers);
    }
}

module.exports.JIRA_API = JIRA_API;
