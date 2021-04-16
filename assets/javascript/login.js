let button = document.querySelector("button");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let iam = document.querySelector("select");
button.addEventListener('click', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    if(iam.value === "admin")
    {   let flag=0;
        admins.forEach((admin) => {
            if(admin.code === username.value && admin.password === password.value) {
                localStorage.username = username.value;
                window.location.href ="admin.html";
                flag = 1;
            }
        });
        if(flag === 0)
        alert("Invalid Credentials!");
    }
    if(iam.value === "doctor")
    {   let flag = 0;
        doctors.forEach((doctor) => {
            if(doctor.code === username.value && doctor.password === password.value) {
                localStorage.username = username.value;
                window.location.href ="doctor.html";
                flag = 1;
            }
        });
        if(flag === 0)
        alert("Invalid Credentials!");
    }
    if(iam.value === "patient")
    {   let flag = 0;
        patients.forEach((patient) => {
            if(patient.code === username.value && patient.password === password.value) {
                localStorage.username = username.value;
                window.location.href ="patient.html";
                flag = 1;
            }
        });
        if(flag === 0)
        alert("Invalid Credentials!");

    }
    
    
}