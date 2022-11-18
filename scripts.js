function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let nrOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQuality == 0){
        alert("Please complete the form. ")
        return;
    }

    if(nrOfPeople == "" | nrOfPeople <= 1) {
        nrOfPeople = 1;
        document.getElementById('eachPerson').style.display ="none"
    }

    else{
        document.getElementById('eachPerson').style.display ="block"
    
    }

    let totalAmount = (bill * serviceQuality) / nrOfPeople;
    totalAmount = totalAmount.toFixed(2);
    document.getElementById('tip').innerHTML = totalAmount;
    document.getElementById('totalTip').style.display ="block";

}


document.getElementById('totalTip').style.display= "none";
document.getElementById('eachPerson').style.display= "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);