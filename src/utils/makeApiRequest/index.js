import axios from 'axios';

const makeApiRequest = async (config) => {
  const { url, methodType, body, responseType, headers } = config;

  try {
    return await axios({
      url,
      method: methodType || 'get',
      data: body || null,
      withCredentials: true,
      responseType: responseType || 'json',
      headers: headers || {}
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default makeApiRequest;
