// Use a for...in statement within this function to loop through the users object passed into the function
//and return the number of users whose online property is set to true
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    
  let count=0;
  for (let user in usersObj) {
    
    if(usersObj[user].online===true) {
   count++ ;
    }
  }
    return count;
  
    
  }
  
  console.log(countOnline(users));

//Generate an Array of All Object Keys with Object.keys()
let users1 = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) { 
    
  return Object.keys(obj);
    
  }
  
  console.log(getArrayOfUsers(users1));

//modify an array stored in an object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    
  userObj.data.friends.push(friend);
  return user.data.friends;
    
  }
  
  console.log(addFriend(user, 'Pete'));