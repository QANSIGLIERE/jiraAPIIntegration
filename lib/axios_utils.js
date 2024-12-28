const axios = require('axios');
var FormData = require('form-data');
const fs = require('fs');

async function get(base_url, additional_path, headers, debug = false) {
    console.log(`https://${base_url}/${additional_path}`)
    let response = await axios(`https://${base_url}/${additional_path}`, {
        method: 'GET',
        headers: headers,
        redirect: 'follow',
    }).catch(function (error) {
        return error;
    });

    if (debug) {
        return [response.status, response.status == 200 ? response.data : response.response.data];
    } else {
        return response.status == 200 ? response.data : response.response.data;
    }
}

async function download(base_url, additional_path, headers) {
    let initial_call = await get(base_url, additional_path, headers, true);
    let final_result = [];

    if (initial_call[0] < 400) {
        final_result = [...initial_call[1]['issues']];

        if (Object.keys(initial_call[1]).includes('nextPageToken')) {
            let next_page_token = initial_call[1]['nextPageToken'];
            let next_additional_path = additional_path + '&nextPageToken=' + next_page_token
            while (next_page_token) {
                let next_call = await get(base_url, next_additional_path, headers);
                final_result.push(...next_call['issues']);
                next_page_token = next_call['nextPageToken']
                next_additional_path = additional_path + '&nextPageToken=' + next_page_token
            }
        }
    } else {
        final_result = initial_call[1];
    }

    return final_result;
}

async function post(base_url, additional_path, json_body, headers) {
    let response = await axios(`https://${base_url}/${additional_path}`, {
        method: 'POST',
        data: JSON.stringify(json_body),
        headers: headers,
        redirect: 'follow',
    }).catch(function (error) {
        return error;
    });

    return response.status == 200 ? response.data : response.response.data;
}

async function post_file(base_url, additional_path, path_to_file, headers, file_key = 'attachment') {
    const data = new FormData();
    data.append(file_key, fs.createReadStream(path_to_file));

    let response = await axios(`https://${base_url}/${additional_path}`, {
        method: 'POST',
        data: data,
        headers: Object.assign(headers, data.getHeaders()),
        redirect: 'follow',
    }).catch(function (error) {
        return error;
    });

    return response.status == 200 ? response.data : response.response.data;
}

module.exports.get = get;
module.exports.download = download;
module.exports.post = post;
module.exports.post_file = post_file;
