let appointment = document.querySelector(".appointment"); 
let report = document.querySelector(".report");
let profile = document.querySelector(".profile");

let currentUser = document.querySelector(".currentUser");
let patient = patients.find((patient)=> patient.code === localStorage.username);
currentUser.innerText = patient.name;

let content = document.querySelector(".content");

appointment.addEventListener('click', handleAppointment);
report.addEventListener('click', handleReport);
profile.addEventListener('click', handleProfile);

/************ Doctor ************/

function handleAppointment() {
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Appointments";
    content.append(h2);
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let date = document.createElement("th");
    let appointmentFor = document.createElement("th");
    let place = document.createElement("th");
    date.innerText = "Date";
    appointmentFor.innerText = "Appointment for";
    place.innerText = "Place";

    thead.append(date, appointmentFor, place);
    table.append(thead);
    
    patient.appointment.forEach((appointment) => {
        let tr = document.createElement("tr");
        let date = document.createElement("td");
        let appointmentFor = document.createElement("td");
        let place = document.createElement("td");

        date.innerText = appointment.date;
        appointmentFor.innerText = appointment.purpose;
        place.innerText = appointment.place;

        tr.append(date, appointmentFor, place);
        table.append(tr);
    });
    content.append(table);    
}

/************ Report ************/

function handleReport() {
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Reports";
    content.append(h2);
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let date = document.createElement("th");
    let reportLink = document.createElement("th");
    
    date.innerText = "Date";
    reportLink.innerText = "Report Link";    

    thead.append(date, reportLink);
    table.append(thead);
    
    patient.reports.forEach((report) => {
        let tr = document.createElement("tr");
        let date = document.createElement("td");
        let reportLink = document.createElement("td");
    
        date.innerText = report.date;
        reportLink.innerText = report.link;    

        tr.append(date, reportLink);
        table.append(tr);
    });
    content.append(table);    
}


/************ Profile ************/

function handleProfile(event) {
    event.preventDefault();
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Profile";
    content.append(h2); 
    let name = document.createElement("p");
    name.innerText = "Name: " + patient.name;    

    let code = document.createElement("p");
    code.innerText = "Code: " + patient.code;

    let dob = document.createElement("p");
    dob.innerText = "DOB: " + patient.dob;
    
    let gender = document.createElement("p");
    gender.innerText = "Gender: " + patient.gender;

    let contact = document.createElement("p");
    contact.innerText = "Contact Number: " + patient.contactNumber;

    let address = document.createElement("p");
    address.innerText = "Address: " + patient.address.flatNumber + 
    patient.address.buildingName + " "+
    patient.address.flatNumber + " "+
    patient.address.landmark + " "+
    patient.address.city + " "+
    patient.address.district + " "+
    patient.address.state + " "+
    patient.address.pincode + " ";
    

    content.append(name, code, dob, gender, contact, address);
    
}