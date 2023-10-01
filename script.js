var button = document.getElementById("hey");
button.addEventListener("click", attendanceCalc);

function attendanceCalc() {
    var at = document.getElementById("attended");
    var tot = document.getElementById("total");
    var pe = document.getElementById("percent").value;
    var attended = parseInt(at.value); 
    var total = parseInt(tot.value);
    var resultElement = document.getElementById("result");
    
    if(total<attended){
        alert("Attended hours Can't be a greater value than total hours.")
        resultElement.innerHTML = ("Attended hours Can't be a greater value than total hours.");
        return
    }
    
    var numericValue = parseFloat(pe.replace('%', ''));
    var temp = attended;
    if(total==attended && numericValue==100){
        resultElement.innerHTML = ("You already achieved 100%");
        return
    }
    // Check if the numericValue is within the allowed range
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 99) {
      
    } else {
    resultElement.innerHTML = ("Invalid percentage value. Please enter a value between 1% and 99%.");
      
      return
    }
    

    while (true) {
        var percentage = (attended / total) * 100; // Calculate the attendance percentage
        if (percentage >= numericValue) {
            break;
        }
            attended++;
            total++;
        
    }

        
        
    var last=attended-temp
    
    if(last==0)
    resultElement.innerHTML = `You Already achieved ${numericValue}% or above`;
    else
    resultElement.innerHTML = `You need to attend ${ last } more classes`;
}
