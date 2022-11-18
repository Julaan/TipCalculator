function calculateTip(event) {
    event.preventDefault();
    console.log(event);    
}

document.getElementById("totalTip").style.display= "none";
document.getElementById("eachPerson").style.display= "none";

document.getElementById("tipsForm").addEventListener('submit', calculateTip);