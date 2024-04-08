document.getElementById("form").onsubmit = function() {
    if(document.getElementById("number").value=="integer"||"string") {
        alert('please enter a number or a letter')
    }
    else{
        alert('Thankyou for the feedback')
    }

}