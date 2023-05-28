$(document).ready(function(){
    getData();
});

function getData(){
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj)
    $("#rollNo").text(studentObj.rollNo)
    $("#firstName").text(studentObj.firstName)    
    $("#lastName").text(studentObj.lastName)    
    $("#dob").text(studentObj.dob)    
    $("#gender").text(studentObj.gender)    
    $("#email").text(studentObj.email)    
    $("#contactNo").text(studentObj.contactNo)    
    $("#branch").text(studentObj.branch)    
    $("#registrationDate").text(studentObj.registrationDate)    
    $("#parentName").text(studentObj.parentName)    
    $("#parentMobileNo").text(studentObj.parentMobileNo)    

}

