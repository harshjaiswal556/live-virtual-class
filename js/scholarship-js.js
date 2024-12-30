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

    // alert(`Hi ${name}, your percentage is ${percentage} and, 10th grade is ${tenth}`)
    document.getElementById("amount").innerHTML = "Total amount to be paid: "+scholarship;
}