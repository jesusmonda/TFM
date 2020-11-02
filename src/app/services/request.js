import axios from "axios";

// return request('GET', `${endpoint}/user/${id}`, {}, {}, true);
export const request = async (method, uri, data, headers, auth = true) => {
  if (['GET', 'DELETE'].includes(method)) {
    uri = serializeUrl(uri, data);
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