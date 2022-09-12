// algorithm to update the record collection object using the update records function as per given rules

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  //Rule 1:If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
  //Rule 2:If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
  //Rule 3: If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
  //Rule 4:If value is an empty string, delete the given prop property from the album.
  //Rule 5:Your function must always return the entire record collection object.
  
  function updateRecords(records, id, prop, value) 
  {
    
      if (prop !== 'tracks' && value !== "") { //"" empty string
      records[id][prop] = value;     //accessing object properties using bracket notation and updating values of object properties
    } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) { //.hasOwnProperty is used to check/test for a particular property in an object
      records[id][prop] = [value];                                                    //it returns true or false
    } else if (prop === 'tracks' && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];  //use delete to remove properties from objects
    }
    return records;
  }
  
  console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));