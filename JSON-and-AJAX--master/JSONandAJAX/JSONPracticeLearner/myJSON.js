/*PRACTICE FOR CREATING JSON FILE*/

/*
// Object
var car = {
           "model": "Audi", //Working with JSON NEED DOUBLE QUOTES on property keys
           "price": 2500,
           "engine": "Petrol"
          }

console.log(car.model);

// Array
var F1 = ["Lewis", "Kimi", "Alonso"];

console.log(F1[1]);
*/

var F1 = {
           "data": [
                     {
                         "car": "Mercedes", //Working with JSON NEED DOUBLE QUOTES on property keys
                         "driver": "Lewis",
                         "wins": 2
        
                     },
                     {
                        "circuit": "Monaco",
                        "pointSystem": [
                                         {
                                             "firstPlace": 25,
                                             "secondPlace": 15,
                                             "thirdPlace": 9
                                         }
                            
                                       ],
                         "teams": 11
                     }
                   ]
    
         }

console.log(F1.data[1].pointSystem[0].thirdPlace);
// Once this is done should validate it on JSON Formatter online to find errors to see if its valid















