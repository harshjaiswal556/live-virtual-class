var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {})

if(localStorage.getItem("name")===null){

    myModal.toggle()
}else{
    document.getElementById("user-name").innerText = "Hi "+localStorage.getItem("name")
}



function save(){
    var name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    document.getElementById("user-name").innerText = "Hi "+localStorage.getItem("name")
}