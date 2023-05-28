// $(document).ready(function(){
//     $("btnAddStudent").click(function(){
//         function getStudentData(){
//             let date = new Date($("#dob").val());
//             day = date.getDate();
//             month = date.getFullYear();
//             let dob = [day, month , year].join("/");

//             let selectedDate = new Date($("registrationDate").val());

//             day = selectedDate.getDate();
//             month = date.getMonth() +1;
//             year = date.getFullYear();
//             let registrationDate = [day, month,year].join("/");

//             let student = {
//                 firstName :$("#firstName").val(),
//                 lastName :$("#lastName").val(),
//                 dob : dob,
//                 gender: $("input[name='gender']:checked").val(),
//                 email:$("#email").val(),
//                 contactNo: $("#contactNo").val(),
//                 branch:$("#sub").find("selected").text(),
//                 rollNO:$("#rollno").val(),
//                 registrationDate: registrationDate,
//                 parentName : $("#parentName").val(),
//                 parentMobileNo : $("#parentMobile").val(),

//             }
//             $("#studentFrom")[0].reset();
//             return student;

//         }
//             function storeDataToLocalStorage(){
//                 if(!localStorage.getItem("student")){
//                     localStorage.setItem("student",JSON.stringify(getStudentData()));
//                 }
//                 else{
//                     localStorage.removeItem("student");
//                     localStorage.setItem("student",JSON.stringify(getStudentData()));
//                 }

//             }
//                 function sendData(){
//                     let xhr = new XMLHttpRequest();
//                     let data = JSON.stringify(getStudentData());
//                     xhr.open("Post","http://localhost:4000/storedata",true);
//                     xhr.setRequestHeader("content-type","application/json");
//                     xhr.send(data);
//                 }
//         storeDataToLocalStorage();
//         sendData();
//         window.location.href = "displaydata.html"
//     })
// })



$(document).ready(function(){
    $("#btnAddStudent").click(function(){
        function getStudentData(){
            let date = new Date($("#dob").val());
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let dob = [day, month , year].join("/");

            let selectedDate = new Date($("#registrationDate").val());

            day = selectedDate.getDate();
            month = selectedDate.getMonth() + 1;
            year = selectedDate.getFullYear();
            let registrationDate = [day, month,year].join("/");

            let student = {
                firstName :$("#firstName").val(),
                lastName :$("#lastName").val(),
                dob : dob,
                gender: $("input[name='gender']:checked").val(),
                email:$("#email").val(),
                contactNo: $("#contactNo").val(),
                branch:$("#branch").text(),
                rollNo:$("#rollno").val(),
                registrationDate: registrationDate,
                parentName : $("#parentName").val(),
                parentMobileNo : $("#parentMobile").val(),

            }
            $("#studentForm")[0].reset();
            return student;

        }
        function storeDataToLocalStorage(){
            if(!localStorage.getItem("student")){
                localStorage.setItem("student",JSON.stringify(getStudentData()));
            }
            else{
                localStorage.removeItem("student");
                localStorage.setItem("student",JSON.stringify(getStudentData()));
            }

        }
        function sendData(){
            let xhr = new XMLHttpRequest();
            let data = JSON.stringify(getStudentData());
            xhr.open("POST","http://localhost:4000/storedata",true);
            xhr.setRequestHeader("content-type","application/json");
            xhr.send(data);
        }
        storeDataToLocalStorage();
        sendData();
        window.location.href = "displaydata.html"
    })
});

