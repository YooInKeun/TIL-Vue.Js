import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
    subUrl: 'https://hacker-news.firebaseio.com/v0/'
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAsksList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchUserInfo(userName) {
    return axios.get(`${config.subUrl}/user/${userName}.json`);
}

function fetchItemInfo(itemId) {
    return axios.get(`${config.subUrl}/item/${itemId}.json`);
}

export {
    fetchNewsList,
    fetchAsksList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo
}