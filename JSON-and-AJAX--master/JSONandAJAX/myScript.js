/*//THIS IS THE JS FILE FOR THE CAR LUXURY PRACTISE

var myManufacturer = document.getElementById("manufacturer");
myManufacturer.addEventListener("change", loadMyData, false);

var mySurvey = document.getElementById("survey");
mySurvey.addEventListener("change", loadMyData, false);

var manuC = document.getElementById("manufacturerC");
manuC.addEventListener("change", loadMyData, false);




function loadMyData() {
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    //console.log(manufacturerStored);
    
    var surveyStored = mySurvey.options[mySurvey.selectedIndex].value;
    
    //console.log(surveyStored);
    
    
    
//This will now get data from JSON file and with console.log() will show the JSON file in console   
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/KiranPaul26/JavaScript/master/expensiveLuxuryCars.json", true);
    
    myRequest.onload = function() {
        
        if(myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            console.log(myData);
            
            document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
            
            document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
           
            document.getElementById("priceC").innerHTML = "£" + myData.data[manufacturerStored].price;
            
            document.getElementById("descriptionC").innerHTML = '<button data-toggle="modal" data-target="#modal1">Full description click here</button>';
            
            document.getElementById("fullD").innerHTML = myData.data[manufacturerStored].description;
            
            document.getElementById("fullL").innerHTML ='<a href=' + myData.data[manufacturerStored].wiki + ' target="_blank">Click here to access Wikipedia for more information.</a>';
            
            document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="' + myData.data[manufacturerStored].video + '"frameborder="0" allowfullscreen</iframe>';
            
            
            
            document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
            document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
            document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
            document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
            document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].quality[4].rating;
            document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
            
            document.getElementById("imgC").innerHTML = '<img src=" ' + myData.data[manufacturerStored].img + '"width="auto" height="auto" alt="Car Image">'
            
            // Code for the chart
            var chart = new CanvasJS.Chart("chartContainer", {
                
                theme: "theme2",
                backgroundColor: "transparent",
                title:{
                    text: "Customer Survey"              
                },
                animationEnabled: true,
                data: [ 
                    {
                        // Change type to "doughnut", "line", "splineArea", etc.
                        type: "surveyStored",
                        dataPoints: [
				//{ label: "apple",  y: 10  },
				//{ label: "orange", y: 15  },
				//{ label: "banana", y: 25  },
				//{ label: "mango",  y: 30  },
				//{ label: "grape",  y: 28  }
			]
		}
		]
	});

    myData.data[manufacturerStored].quality.foreach(function(item, index) {
        
        chart.options.data[0].dataPoints.push({"label": item.name, "y": item.rating});
        document.getElementById(item.name+"C").innerHTML = item.rating;
    });
            
	chart.render();
            
            
        }
    }
    
    
    myRequest.onerror = function() {
        
        document.getElementById("messageAlert").innerHTML = "You are not connected online and can't reach the server ..."
    }
    
    myRequest.send();
    
    //console.log(myRequest);  
} */



/* THIS IS THE JS FILE FOR THE CAR LUXURY PRACTICE */

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadMyData, false);

var mySurvey = document.getElementById("survey");

mySurvey.addEventListener("change", loadMyData, false);


function loadMyData() {
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    console.log(manufacturerStored);

//THIS IS WHAT CHANGES THE TYPE OF CHARTS IN THE SITE
    var chartType = mySurvey.options[mySurvey.selectedIndex].value;
    
    //console.log(chartType);
 
//THIS WILL NOW GET THE DATA FROM THE JSON FILE AND WITH THE CONSOLE.LOG() WILL SHOW THE JSON FILE IN CONSOLE
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/biatoSalo/JavaScript/master/expensiveLuxuryCars.json", true);
    
    
    myRequest.onload = function() {
        
        if( myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            console.log(myData);
            
  // SOLVING PROBLEM WHERE WHEN WE CLICK CHART OPTIONS FIRST NOTHING HAPPENS, NEDD TO COMMUNICATE WITH USER TO REASSURE SITE IS NOT BROKEN AND NEED TO CLICK THE CAR MANUFACTURER FIRST          
            if(manufacturerStored === "") {
            
            function clearAll() {
                
                var hideText = document.getElementsByClassName("data");
                
                for( var i = 0; i < hideText.length; i++) {
                    
                    hideText[i].innerHTML = "";
                }
            }
            
            clearAll();
            
            document.getElementById("messageAlert").innerHTML = "Please you must choose a car manufacturer to load data...";
            
            } else { 
            
            
            document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
            
            document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
            
            document.getElementById("priceC").innerHTML = "� " + myData.data[manufacturerStored].price;
            
            document.getElementById("descriptionC").innerHTML = '<button data-toggle="modal" data-target="#modal1">Full description click here</button>';
            
            document.getElementById("fullD").innerHTML = myData.data[manufacturerStored].description;
            
            document.getElementById("fullL").innerHTML = '<a href=' + myData.data[manufacturerStored].wiki + ' target="_blank">Click here to access Wikipedia for more information.</a>';
            
            document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="' + myData.data[manufacturerStored].video + '"frameborder="0" allowfullscreen></iframe>';
            
            document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
            
            document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
            
            document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
            
            document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
            
            document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].quality[4].rating;
            
            document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
            
            document.getElementById("imgC").innerHTML = '<img src="' + myData.data[manufacturerStored].img + '"width="auto" height="auto" alt="Car Image">';
            
            /* THIS IS THE CODE FOR THE CHART */
            
            var chart = new CanvasJS.Chart("chartContainer", {
                
        theme: "theme2", //READ THE DOCUMENTATION
        backgroundColor: "transparent", 
		title:{
			text: "Customer Survey"              
		},
        animationEnabled: true, //READ THE DOCUMENTATION
		data: [              
		{
			type: chartType,
			dataPoints: [
				{ label: "Body",  y: myData.data[manufacturerStored].quality[3].rating  },
				{ label: "Accessories", y: myData.data[manufacturerStored].quality[5].rating  },
				{ label: "Interior", y: myData.data[manufacturerStored].quality[4].rating  },
				{ label: "PowerTrain",  y: myData.data[manufacturerStored].quality[2].rating  },
				{ label: "Mechanical",  y: myData.data[manufacturerStored].quality[1].rating  },
				{ label: "Overall",  y: myData.data[manufacturerStored].quality[0].rating  }
			]
		}
		]
	});
 
//THIS LABELS THE X AND Y OF THE CHARTS IN A SIMPLER WAY
        /*var surveyResults = function(item) {
            
            //console.log(item.name);
            chart.options.data[0].dataPoints.push({
                
               "label": item.name,
                "y": item.rating
                
            });
            
            document.getElementById(item.name+"C").innerHTML = item.rating;
        }
                
                
        myData.data[manufacturerStored].quality.forEach(surveyResults);   */     
                
                
                
//FRANKS CODE
     /*myData.data[manufacturerStored].quality.forEach(
         function(item, index) {
         
         chart.options.data[0].dataPoints.push({ "label": item.name, "y": item.rating});
         document.getElementById(item.name+"C").innerHTML = item.rating;
         
     }); */      
            
    //FOR THE CHARTS TO APPEAR       
	chart.render();
                
    document.getElementById("messageAlert").innerHTML = "";
            
        }
            
        } else {
            //WHEN ITS WRONF AFTER .COM ON LINE 138
            document.getElementById("messageAlert").innerHTML = "We successfully connected to the server but it returned an ERROR!";
        }
    }
 //WHEN ITS WRONG BEFORE THE .COM ON LINE 138  
    myRequest.onerror = function() {
        //alert("something gone wrong...");
        document.getElementById("messageAlert").innerHTML = "You are not connected online or we can't reach the server...";
    }
    
    myRequest.send();

}


