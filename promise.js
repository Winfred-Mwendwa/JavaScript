//A promise is a constructor function(uses new keyword) that can either get resolved(fulfilled) or rejected
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server/true to rep. a successful response
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => { //then;method used when a promise is resolved. executed immediately a promise's resolve method is called
    console.log(result);
  });
  makeServerRequest.catch(error => { //catch;method used when a promise is rejected.executed immediately a promise's reject method is called
    console.log(error);
  });