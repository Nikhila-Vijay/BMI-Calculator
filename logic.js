const btn = document.getElementById("calculate")

btn.addEventListener("click", function(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height == "" || weight == ""){
        alert("Please enter your Height and Weight!");
        return;
    }

    height = height/100;

    let BMI = weight/(height*height);
    BMI = BMI.toFixed(2);
    document.getElementById("result").innerHTML = BMI;

    let status = "";

    if (BMI < 18.5){
        status = "You are Underweight";
    }
    if (BMI>= 18.5 && BMI < 24.9){
        status = " You are Healthy"
    }

    if (BMI >= 25 && BMI < 29.9){
        status = " You are Overweight";
    }

    if(BMI >= 30){
        status = "Obese";
    }

    document.querySelector(".comment").innerHTML = `${status}`;

});


function reset(){
    height.value="";
    weight.value ="";
    document.getElementById("result").innerHTML = "00.00";
    document.querySelector(".comment").innerHTML = "";

}


