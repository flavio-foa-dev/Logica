function promisyfy(fn, hasCallback = true) {
  if(typeof fn !== 'function') {
    return "invalid"
  }

  return function(...args) {
    if(!hasCallback) {
      return new Promise(function(resolve, reject) {
        try {
          const result = fn(...args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      })
    }
  }

  return new Promise(function(resolve, reject){
    fn(...args, (err, esponse) => {
      if (err) {
        reject(err);
      }else {
        resolve(esponse);
      }
    })
  })
}


console.log(promisyfy())