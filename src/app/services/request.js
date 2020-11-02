import axios from "axios";

// return request('GET', `${endpoint}/user/${id}`, {}, {}, true);
export default request = async (method, uri, data, headers, auth = true) => {
  if (['GET', 'DELETE'].includes(method)) {
    uri = serializeUrl(uri, data);
  }
  if (auth) {
    // const access_token = localStorage.getItem('access_token');
    // headers.Authorization = 'Bearer ' + access_token;
  }

  try {
    return await axios.request({method: method, url: uri, data: data, headers: headers});
  } catch (error) {
    throw error;
  }
}

const serializeUrl = (uri, params) => {
  const str = [];

  for (const p in params) {
    if (params.hasOwnProperty(p) && params[p] !== null) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
    }
  }

  if (str.length) {
    return uri + '?' + str.join('&');
  } else {
    return uri;
  }
}