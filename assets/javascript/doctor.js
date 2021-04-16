let appointment = document.querySelector(".appointment"); 
let patient = document.querySelector(".patient");
let pharmacy = document.querySelector(".pharmacy");
let lab = document.querySelector(".lab");
let profile = document.querySelector(".profile");
let content = document.querySelector(".content");
let currentUser = document.querySelector(".currentUser");
currentUser.innerText = doctors.find((doctor) => doctor.code === localStorage.username).name;


appointment.addEventListener('click', handleAppointment);
patient.addEventListener('click', handlePatient);
pharmacy.addEventListener('click', handlePharmacy);
lab.addEventListener('click', handleLab);
profile.addEventListener('click', handleProfile);


/************ Doctor ************/

function handleAppointment() {
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Today's Appointments";
    content.append(h2);
    let time = 9;
    for(let i = 0; i < 5; i++) {
        let div = document.createElement("div");
        if(i < 2) {
            div.innerHTML = "<div>" + time + ":00am  </div>" + "<div>" + doctors[0].appointments[i]+"</div>";
        } else {
            div.innerHTML = "<div>" + (time-12) + ":00pm  </div>" + "<div>" + doctors[0].appointments[i]+"</div>";
        }
        let br = document.createElement("br");
        content.append(br, div);
        time = time + 2;
    }
}

/************ Patient ************/

function handlePatient(event) {
    event.preventDefault();
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Patients";
    content.append(h2);
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let code = document.createElement("th");
    code.innerText = 'Code';
    let name = document.createElement("th");
    name.innerText = 'Name';
    let detail = document.createElement("th");
    detail.innerText= 'Details';
    thead.append(code, name, detail);
    table.append(thead);
    let tbody = document.createElement("tbody");
    patients.filter((patient) => patient.doctorCode === 'D01').forEach((patient) => {
        
        let tr = document.createElement("tr");
        let code = document.createElement("td");
        let name = document.createElement("td");
        let detail = document.createElement("td");
        let a = document.createElement("a");
        

        code.innerText = patient.code;
        name.innerText = patient.name;
        a.innerText = "Details";
        a.classList.add("underline");
        a.href = "https://www.google.com";
        detail.append(a);
        tr.append(code, name, detail);
        tbody.append(tr);
    });
    table.append(tbody);
    content.append(table);

    let add = document.createElement("a");
    add.href = "https://www.google.com";
    add.classList.add("add");    
}

/************ Pharmacy ************/

function handlePharmacy(event) {
    event.preventDefault();
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Pharmacy";
    content.append(h2);
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let name = document.createElement("th");
    name.innerText = 'Name';
    let address = document.createElement("th");
    address.innerText= 'Address';
    let contact = document.createElement("th");
    contact.innerText = 'Contact Number';
    
    thead.append(name, address, contact);
    table.append(thead);
    let tbody = document.createElement("tbody");
    pharmacies.forEach((pharmacy) => {
        
        let tr = document.createElement("tr");
        let name = document.createElement("td");
        let address = document.createElement("td");
        let contact = document.createElement("td");
        
        name.innerText = pharmacy.name;
        address.innerText = pharmacy.address;
        contact.innerText = pharmacy.contactNumber;
        tr.append(name, address, contact);
        tbody.append(tr);
    });
    table.append(tbody);
    content.append(table);
    }

/************ Lab ************/

function handleLab(event) {
    event.preventDefault();
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Labs";
    content.append(h2);
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let name = document.createElement("th");
    name.innerText = 'Name';
    let address = document.createElement("th");
    address.innerText = 'Address';
    let contact = document.createElement("th");
    contact.innerText= 'Contact';
    thead.append(name, address, contact);
    table.append(thead);
    let tbody = document.createElement("tbody");
    labs.forEach((lab) => {
        
        let tr = document.createElement("tr");
        let name = document.createElement("td");
        let address = document.createElement("td");
        let contact = document.createElement("td");
        
        name.innerText = lab.name;
        address.innerText = lab.address;
        contact.innerText = lab.contactNumber;
        
        tr.append(name, address, contact);
        tbody.append(tr);
    });
    table.append(tbody);
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
    name.innerText = "Name: " + doctors[0].name;    

    let code = document.createElement("p");
    code.innerText = "Code: " + doctors[0].code;

    let speciality = document.createElement("p");
    speciality.innerText = "Speciality: " + doctors[0].speciality;

    let dob = document.createElement("p");
    dob.innerText = "DOB: " + doctors[0].dateOfBirth;
    
    let gender = document.createElement("p");
    gender.innerText = "Gender: " + doctors[0].gender;

    let contact = document.createElement("p");
    contact.innerText = "Contact Number: " + doctors[0].contactNumber;

    let visiting = document.createElement("p");
    visiting.innerText = "Visiting Hospitals: " + doctors[0].visiting;

    content.append(name, code, speciality, dob, gender, contact, visiting);
    
}