const axios = () => {
  console.log('*********** log 1')
  return new Promise((resolve) => {
    console.log('*********** hello');
    resolve({
      payload: {}
    });
  });
}

export default axios;
