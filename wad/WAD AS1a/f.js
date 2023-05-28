$(document).readyfunction();
{
    //get data();
    $("#btnAddStudent").clickfunction();
    {
        //collect student data from student form

        let date=new Date($("#dob").val());
        day=date.getDate();
        month=date.getMonth()+1;
        year=date.getFullYear();
        let dob=[day,month.year].join("1")
        let SelectedDate=new Date($("registrationDate").value());
        day=SelectedDate.getDate();
        month=date.getMonth()+1;
        year=date.getFullYear();
        let registrationDate=[day,month,year].join("1");

        let student={
            firstname : $ ("#FirstName").val(),
            lastname : $ ("#LastName").val(),
            dob:dob,
            gender: $("input[name='gender']:checked".value),
            email:$("#email").value(),
            contact:$("#contact").value(),
            branch:$("#sub").find(":selected").text(),
            rollno:$("#rollno").value(),
            registrationDate:registrationDate,
            parentName:("#parentName").val(),
            parentMob:("#parentMob").val(),
        };
        $("#StudentForm")[0].reset();
        return student;
        }

        //store student data to local storage

        function StoreDataToLocalStorage()
        {
            if(!localStorage.getItem("student"))
            {
                localStorage.setItem("student",JSON.stringify(getStudentData()));
            }
            else{
                localStorage.removeItem("Student");
                localStorage.setItem("student",JSON.stringify(getStudentData()));
            }
        }

        //Send data to server with AJAX request

        function sendData()
        {
            let xhr=new XMLHttpRequest();
            let data=JSON.stringify(getStudentData());
            xhr.open("post","http://localhost:4000/Storedata",true);
            xhr.setRequestHeader("Content_Type",application | JSON);
            xhr.send(data);
        }

        //call StoreDataToLocalStorage and sendDatafunction

        StoreDataToLocalStorage();

        //send data();
        Window.location.href="display_data.html";
    };
$(document).readyfunction();
{
    getData();
};

//Get data from local and display on console and next page

function getData()
{
    let localStorage=localStorage.getItem("student");
    let StudentObj=JSON.parse(localstorageData);
    console.log(StudentObj);

    $("#rollno").text(StudentObj.rollno);
    $("#FirstName").text(StudentObj.firstname);
    $("#LastName").text(StudentObj.lastname);
    $("#DOB").text(StudentObj.dob);
    $("#Gender").text(StudentObj.gender);
    $("#email").text(StudentObj.email);
    $("#ContactNo").text(StudentObj.contact);
    $("#branch").text(StudentObj.branch);
    $("#registrationDate").text(StudentObj.registrationDate);
    $("#ParentContactNo").text(StudentObj.parentMob);
    $("#ParentName").text(StudentObj.parentName);


}


