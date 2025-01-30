export class JIRA_API {
    constructor(url: any, username: any, api_key: any);
    url: any;
    headers: {
        'user-agent': string;
        'content-type': string;
        accept: string;
        authorization: string;
    };
    headersFormData: {
        'user-agent': string;
        accept: string;
        authorization: string;
    };
    download_search_jql(jql: any): Promise<any>;
    get_issue(id: any): Promise<any>;
    get_field(): Promise<any>;
    get_all_users(maxResults?: number): Promise<any>;
    get_all_users_by_default(maxResults?: number): Promise<any>;
}
//# sourceMappingURL=api_integration.d.ts.map