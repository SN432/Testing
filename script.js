// console.log("hello world");


document.getElementById("hi").addEventListener("submit",function(event){
    event.preventDefault()
    console.log(event)

    let firstName = document.getElementById("fname").value
    let lastName = document.getElementById("lname").value
   
    document.getElementById("getfname").innerHTML = firstName;
    document.getElementById("getlname").innerHTML = lastName;

    var x = document.getElementById("getname");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }

    var y = document.getElementById("circle");
    if (y.style.display === "flex") {
      y.style.display = "none";
    } else {
      y.style.display = "flex";
    }

    
})

