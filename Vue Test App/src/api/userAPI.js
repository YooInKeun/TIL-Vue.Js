import axios from "axios";
import { makeQueryString } from "../utils/query.js";

const config = {
  baseUrl: "http://anylogic.iptime.org:8580/chunjae/user/"
  // baseUrl: "http://192.168.0.86:8580/chunjae/user/"
};

export default () => {
  return {
    selectUser: conditions => {
      return axios.get(
        `${config.baseUrl}selectUser/${makeQueryString(conditions)}`
      );
    }
  };
};
