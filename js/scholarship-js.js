function tandc(){
    window.open("tandc.html","","height=500, width=500, top=100, left=500")
}

function display() {
    var name = form1.name.value
    var marks1 = parseInt(document.getElementById("marks1").value)
    var marks2 = parseInt(document.getElementById("marks2").value)
    var marks3 = parseInt(document.getElementById("marks3").value)
    var marks4 = parseInt(document.getElementById("marks4").value)
    var tenth = document.getElementById("tenth").value; 
    document.getElementById("name").innerText = "";
    document.getElementById("m1").innerText = "";
    document.getElementById("m2").innerText = "";
    document.getElementById("m3").innerText = "";
    document.getElementById("m4").innerText = "";
    
    if(name == ""){
        document.getElementById("name").innerText = "Enter your full name"
        return false;
    } else if(isNaN(marks1)){
        document.getElementById("m1").innerText = "Enter your maths marks"
        return false;
    } else if(isNaN(marks2)){
        document.getElementById("m2").innerText = "Enter your english marks"
        return false;
    } else if(isNaN(marks3)){
        document.getElementById("m3").innerText = "Enter your science marks"
        return false;
    } else if(isNaN(marks4)){
        document.getElementById("m4").innerText = "Enter your computer marks"
        return false;
    }
    
    var percentage = parseInt((marks1+marks2+marks3+marks4)/4);
    var scholarship = 100000;
    if(percentage>=90 && tenth<=1){
        alert(`50% scholarship`);
        scholarship = 0.5*100000;
    } else if(percentage>=80 && tenth<=2){
        alert(`25% scholarship`);
        scholarship = 0.75*100000;
    } else{
        alert(`0% scholarship`);
    }
    document.getElementById("amount").innerHTML = "Total amount to be paid: "+scholarship;
}