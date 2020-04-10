import axios from "axios";
import { makeQueryString } from "../utils/query.js";

const userAPI = {
  userAPI: (APIName, conditions) => {
    return requestUser[APIName](conditions);
  }
};

const config = {
  baseUrl: "http://anylogic.iptime.org:8580/chunjae/user/"
};

const requestUser = {
  selectUser: conditions => {
    return axios.get(
      `${config.baseUrl}selectUser/${makeQueryString(conditions)}`
    );
  },
  selectUserOne: userSeqObj => {
    return axios.get(
      `${config.baseUrl}selectUserOne/${makeQueryString(userSeqObj)}`
    );
  },
  updateUser: userFormData => {
    return axios.post(`${config.baseUrl}updateUser/`, userFormData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
};

export { userAPI };