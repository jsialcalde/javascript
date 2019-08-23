// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");


// Append data into table body
data.forEach(function(UFO) {
   
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
 
      // Append a cell to the row for each value
      // in the data
      var cell = row.append("td");
      cell.text(value);
    });
  });


// select the button
var button = d3.select("#filter-btn");

// create an event trigger on button click
button.on("click",function(){
    
    // select the date input element
    var dateInput = d3.select("#datetime");

    // Get the entered value of the date input element
    var dateValue = dateInput.property("value");

    // filter table depending on user's input

    var filteredData = data.filter(event => event.datetime === dateValue);
    console.log(filteredData);


    //remove current table values
    data.forEach(function(RemoveUFO) {
   
        Object.entries(RemoveUFO).forEach(function([key, value]) {
 
            if(dateValue !== value){
           
                var tableBody = d3.select("tbody");
                tableBody.html("");
            }
            
        
        });
      });

    // add filtered data into the table
    filteredData.forEach(function(filterUFO) {

        var filteredRow = tbody.append("tr");
        Object.entries(filterUFO).forEach(function([key, value]) {
    
          // Append a cell to the row for each value
          // in the data
          var cell = filteredRow.append("td");
          cell.text(value);


        });
      });

})