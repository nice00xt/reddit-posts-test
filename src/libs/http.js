import axios from "axios";
import { path, mergeDeepRight } from "ramda";

const defaultBaseURL = "https://www.reddit.com";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const request = (method, url, axiosConfig, customHeaders, baseURL) => {
  const headers = { ...defaultHeaders, ...customHeaders };
  const options = mergeDeepRight(
    {
      method,
      url,
      headers,
      baseURL: baseURL || defaultBaseURL,
    },
    axiosConfig
  );
  return axios(options);
};

export const post = (url, data = {}, headers = {}, baseURL) =>
  request("post", url, data, headers, baseURL);
export const put = (url, data = {}, headers = {}, baseURL) =>
  request("put", url, data, headers, baseURL);
export const get = (url, data = {}, headers = {}, baseURL) =>
  request("get", url, data, headers, baseURL);
export const destroy = (url, data = {}, headers = {}, baseURL) =>
  request("delete", url, data, headers, baseURL);

  export const getResponseData = path(['data']);
