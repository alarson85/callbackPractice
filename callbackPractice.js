/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

 

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first


function first(arr, cb) {
    cb(arr[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
function last(arr, cb) {
    cb(arr[arr.length - 1]);
};
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply

function multiply(numX, numY, cb) {
  cb(numX * numY);
}

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
var contains = function(arr, target, cb){
  var found = false;
  if (arr.indexOf(target) !== -1){
    found = true;
  }
  cb(found);
}

//how does indexOf() work, why !== -1, why do we start by setting the var to false?

function contains(arr, name, cb) {
  var found = false;
  for(var i = 0; i<arr.length; i++){
    if(arr[i] === name){
      found = true
    }
  } 
  cb(found);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq


function uniq(arr, cb){
  var newArr = [];
  arr.indexOf()
}



function uniq(arr, cb){
  var uniqArray = [];
  for(var i = 0; i<arr.length; i++){
    for(var i = 0; i<arr.length; i++)
      if(arr[i] === arr[i] && i !== i){
        uniqArray = arr[i].splice(i,1);
      }
  }
  cb(uniqArray);
}

function uniq(arr, cb){
     var newArr = arr.filter(function(item){
       if(arr.indexOf(item) === arr.lastIndexOf(item)){
         return true;
       }
     });
     console.log(newArr)
     cb(newArr)


    }

    //Code Here for uniq
    //creates a new object, then sets each value equal to true, the array won't add properties that are the same. Then loops through and pushes that array to uniqArray
    function uniq(names, cb) {
      var obj = {};
      var uniqArray = [];
      for (var i = 0; i < names.length; i++) {
        obj[names[i]] = true;
      }
      for (var key in obj) {
        uniqArray.push(key);
      }
      cb(uniqArray);
    }


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
    var each = function (arr, cb) {
      return arr.map(function(item, index) {
       cb(item, index);
      })
    }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
 var getElementsByTagName = function(object, id, cb) {

 }

 var getUserById = function(arr, id, cb) {
  arr.map(function(obj, index) {
    if(obj.id === id) {
      cb(obj);
    }
  });
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
