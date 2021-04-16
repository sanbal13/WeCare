let appointment = document.querySelector(".appointment"); 
let report = document.querySelector(".report");
let profile = document.querySelector(".profile");

let currentUser = document.querySelector(".currentUser");
currentUser.innerText = patients.find((patient) => patient.code === localStorage.username).name;


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
    
    patients[0].appointment.forEach((appointment) => {
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
    
    patients[0].reports.forEach((report) => {
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
    name.innerText = "Name: " + patients[0].name;    

    let code = document.createElement("p");
    code.innerText = "Code: " + patients[0].code;

    let dob = document.createElement("p");
    dob.innerText = "DOB: " + patients[0].dob;
    
    let gender = document.createElement("p");
    gender.innerText = "Gender: " + patients[0].gender;

    let contact = document.createElement("p");
    contact.innerText = "Contact Number: " + patients[0].contactNumber;

    let address = document.createElement("p");
    address.innerText = "Address: " + patients[0].address.flatNumber + 
    patients[0].address.buildingName + " "+
    patients[0].address.flatNumber + " "+
    patients[0].address.landmark + " "+
    patients[0].address.city + " "+
    patients[0].address.district + " "+
    patients[0].address.state + " "+
    patients[0].address.pincode + " ";
    

    content.append(name, code, dob, gender, contact, address);
    
}