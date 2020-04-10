import { userAPI } from "./userAPI.js";

const API = Object.assign(userAPI());

export default () => {
  return API;
};
