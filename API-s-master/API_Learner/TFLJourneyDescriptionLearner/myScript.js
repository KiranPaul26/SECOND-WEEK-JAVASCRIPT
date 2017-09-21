/* //                    THIS FILE IS IS THE JS SCRIPT FOR THE TFL API PRACTICE 

//alert("Hello");


document.getElementById("depPC").focus(); //FOCUS ON DEPARTURE INPUT ONCE LOAD PAGE
document.getElementById("googleMap").style.display = "none"; //HIDE THIS ELEMENT ON PAGE ONCE LOADED


//                                       MY VARIABLES

var getDepPC;
var getArrPC;
var myList;
var choiceOption;

//                             THIS HERE ARE EVENT LISTENERS

var getJourneyData = document.getElementById("mySubmit");
getJourneyData.addEventListener("click", loadMyData, false);

var postCodeSwitch = document.getElementById("mySwitch");
postCodeSwitch.addEventListener("click", switchMyPostCode, false);

var routeOption1 = document.getElementById("option1");
routeOption1.addEventListener("click", loadMyData, false);

var routeOption2 = document.getElementById("option2");
routeOption2.addEventListener("click", loadMyData, false);

var routeOption3 = document.getElementById("option3");
routeOption3.addEventListener("click", loadMyData, false);

function loadMyData() {
    
    //alert("Hello");
    getDepPc = document.getElementById("depPC").value;
    
    getArrPc = document.getElementById("arrPC").value;
    
    

//                     THIS IS TAKING CODE FROM TFL API SO WE CAN REACH THIS DATA
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://api.tfl.gov.uk/journey/journeyresults/" + getDepPC + "/to/" + getArrPc, true);

    myRequest.onload = function() {
        
        if( myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            console.log(myData); //SHOWS DATA CODE ON CONSOLE
            
            myList = document.getElementById("stepsD");
            myList.innerHTML = "";
            
            switch(choiceOption) {
                   
                   case(1):
                    document.getElementById("startDT").innerHTML = "Date: " + myData.journeys[1].startDateTime.replace("T", " |Time:")
                    
                   break;
                   case(2):
                    
                    
                   break;
                   default:
                    
                    
                   break;
                   
                   }
            
        }
}

   myRequest.send();
//                                         END OF TFL API DATA CODE
      
}*/









/*This is my JS for the TFL Journey Planner Practice*/

//My Variables

var getDepPC;
var getArrPC;
var myList;
var choiceOption;
var journeyDuration;
var hours;
var minutes;

//End of my Variables


document.getElementById("depPC").focus();

document.getElementById("googleMap").style.display = "none";


//My Event Listenners

var getJourneyData = document.getElementById("mySubmit").addEventListener("click", loadMyData, false);

var postCodeSwitch = document.getElementById("mySwitch").addEventListener("click", switchMyPostCode, false);

var routeOption1 = document.getElementById("option1").addEventListener("click", loadMyData, false);

var routeOption2 = document.getElementById("option2").addEventListener("click", option2Data, false);

var routeOption3 = document.getElementById("option3").addEventListener("click", option3Data, false);

//End of My Event Listenners


function loadMyData() {

    
    getDepPC = document.getElementById("depPC").value;
    getArrPC = document.getElementById("arrPC").value;
    
    //console.log(getDepPC);
    //console.log(getArrPC);

    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://api.tfl.gov.uk/journey/journeyresults/" + getDepPC + "/to/" + getArrPC, true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData);
            myList = document.getElementById("stepsD");
            myList.innerHTML = "";
            
            document.getElementById("messageD").innerHTML = ""; 
            
            //Condition(Boolean)
            switch(choiceOption) {
                    
                    case(1):
                    
                    document.getElementById("startDT").innerHTML = "Date: " + myData.journeys[1].startDateTime.replace("T", " | Time: ");
                    
                    document.getElementById("arrivalDT").innerHTML = "Date: " + myData.journeys[1].arrivalDateTime.replace("T", " | Time: ");
                    
                    journeyDuration = myData.journeys[1].duration;

                    journeyD(journeyDuration);
                    
                    for ( var i = 0; i < myData.journeys[1].legs.length; i++) {
                
                    myList.innerHTML += "- " + myData.journeys[1].legs[i].instruction.summary + "<br />";
                    }
                    
                    choiceOption = 0;
                    
                    break;
                    
                    case(2):
                    
                    document.getElementById("startDT").innerHTML = "Date: " + myData.journeys[2].startDateTime.replace("T", " | Time: ");
                    
                    document.getElementById("arrivalDT").innerHTML = "Date: " + myData.journeys[2].arrivalDateTime.replace("T", " | Time: ");
                    
                    journeyDuration = myData.journeys[2].duration;

                    journeyD(journeyDuration);
                    
                    for ( var i = 0; i < myData.journeys[2].legs.length; i++) {
                
                    myList.innerHTML += "- " + myData.journeys[2].legs[i].instruction.summary + "<br />";
                    }
                    
                    choiceOption = 0;
                    
                    break;
                    
                    
                default:
              
                    document.getElementById("startDT").innerHTML = "Date: " + myData.journeys[0].startDateTime.replace("T", " | Time: ");
                    
                    document.getElementById("arrivalDT").innerHTML = "Date: " + myData.journeys[0].arrivalDateTime.replace("T", " | Time: ");
                    
                    journeyDuration = myData.journeys[0].duration;
                    
                    journeyD(journeyDuration);

                    for ( var i = 0; i < myData.journeys[0].legs.length; i++) {
                
                    myList.innerHTML += "- " + myData.journeys[0].legs[i].instruction.summary + "<br />";
                        
                    }
                    
                    break;
            }
            
                    document.getElementById("googleMap").style.display = "block";
            
                    document.getElementById("myGoogleMap").setAttribute("src", "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDqwEMrYspWHOIjkw2EIX9vGwpb8IsL_o8&origin="+getDepPC+"&destination="+getArrPC+"&mode=driving");

            } else if ( getDepPC === "" || getArrPC === "") {
                
                    initialS()
                
                    document.getElementById("depPC").focus();
                    document.getElementById("messageD").innerHTML = "Please enter a POSTCODE";    
                    
                    /*document.getElementById("googleMap").style.display = "none";*/
                    
                    
            } else if ( getDepPC !== "" && getArrPC !== "") {
                
                    initialS()    
                
                    document.getElementById("depPC").focus();
                    document.getElementById("messageD").innerHTML = "WRONG POSTCODE OR NOT KNOWN";  
                    
                    /*document.getElementById("googleMap").style.display = "none";*/
            }
            
        }
            
            
 
    myRequest.onerror = function() {
        
        document.getElementById("messageD").innerHTML = "You are not connected online and can't reach the server!";
    }
    
    myRequest.send();
    
        /*}*/
   
}

//Cleaning 
function initialS() {
    
        document.getElementById("journeyD").innerHTML = "";
        document.getElementById("startDT").innerHTML = "";
        document.getElementById("arrivalDT").innerHTML = "";
        document.getElementById("stepsD").innerHTML = "";
        document.getElementById("googleMap").style.display = "none";
}

function switchMyPostCode() {
    
    //alert("Yes is working!");
    
    getDepPC = document.getElementById("depPC").value;
    getArrPC = document.getElementById("arrPC").value;
    
    document.getElementById("depPC").value = getArrPC;
    document.getElementById("arrPC").value = getDepPC;
    
    //console.log(getDepPC);
    //console.log(getArrPC);
}

function option2Data() {
    
    choiceOption = 1;
    
    loadMyData();
    
}

function option3Data() {
    
    choiceOption = 2;
    
    loadMyData();
    
}

function journeyD(journeyDuration){
  hours = Math.trunc(journeyDuration/60);
  minutes = journeyDuration % 60;
  document.getElementById("journeyD").innerHTML = + hours + ":" + minutes + " h/m";
}




