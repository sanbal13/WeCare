let doctor = document.querySelector(".doctor"); 
let patient = document.querySelector(".patient");
let nurse = document.querySelector(".nurse");
let profile = document.querySelector(".profile");
let content = document.querySelector(".content");
let currentUser = document.querySelector(".currentUser");
admin = admins.find((admin) => admin.code === localStorage.username)
currentUser.innerText =admin.name;

doctor.addEventListener('click', handleDoctor);
patient.addEventListener('click', handlePatient);
nurse.addEventListener('click', handleNurse);
profile.addEventListener('click', handleProfile);


/************ Doctor ************/

function handleDoctor() {
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Doctors";
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
    doctors.forEach((doctor) => {
        
        let tr = document.createElement("tr");
        let code = document.createElement("td");
        let name = document.createElement("td");
        let detail = document.createElement("td");
        let a = document.createElement("a");
        

        code.innerText = doctor.code;
        name.innerText = doctor.name;
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
    add.href = "#";
    add.addEventListener('click', handleAddDoctor);
    add.classList.add("add");
    let plus = document.createElement("i");
    plus.classList.add("far");
    plus.classList.add("fa-plus-square");

    let p = document.createElement("p");
    p.classList.add("add-text");
    p.innerText = "Add a Doctor";
    add.append(plus, p);
    content.append(add);

}
/*********** Add Doctor ***********/
function handleAddDoctor() {
    let form = document.createElement("form");
    let lcode = document.createElement("label");
    lcode.setAttribute("for","code");
    lcode.innerText = 'Code:'; 
    let lname = document.createElement("label");
    lname.setAttribute("for","name");
    lname.innerText = 'Name:'; 
    let lpassword = document.createElement("label");
    lpassword.setAttribute("for","password");
    lpassword.innerText = 'Password:'; 
    let lspeciality = document.createElement("label");
    lspeciality.setAttribute("for","speciality");
    lspeciality.innerText = 'Speciality:'; 
    let ldegree = document.createElement("label");
    ldegree.setAttribute("for","degree");
    ldegree.innerText = 'Degree:'; 
    let ldob = document.createElement("label");
    ldob.setAttribute("for","dob");
    ldob.innerText = 'DOB:';    
    let lgender = document.createElement("label");
    lgender.setAttribute("for","gender");
    lgender.innerText = 'Gender:'; 
    let lcontact = document.createElement("label");
    lcontact.setAttribute("for","contact");
    lcontact.innerText = 'Contact Number:'; 
    let laddress = document.createElement("label");
    laddress.setAttribute("for","address");
    laddress.innerText = 'Address:'; 
    let lvisiting = document.createElement("label");
    lvisiting.setAttribute("for","visiting");
    lvisiting.innerText = 'Visiting Hospital:'; 
    let lappointments = document.createElement("label");
    lappointments.setAttribute("for","appointments");
    lappointments.innerText = 'Appointments:'; 

    let code = document.createElement("input");
    code.type="text";
    code.setAttribute('placeholder','Code');
    code.setAttribute('id','code');
    let name = document.createElement("input");
    name.type="text";
    name.setAttribute('placeholder','Name');
    name.setAttribute('id','name');
    let password = document.createElement("input");
    password.type="text";
    password.setAttribute('placeholder','Password');
    password.setAttribute('id','password');
    let speciality = document.createElement("input");
    speciality.type="text";
    speciality.setAttribute('placeholder','Speciality');
    speciality.setAttribute('id','speciality');
    let degree = document.createElement("input");
    degree.type="text";
    degree.setAttribute('placeholder','Degree');
    degree.setAttribute('id','degree');
    let dob = document.createElement("input");
    dob.type="text";
    dob.setAttribute('placeholder','DOB');
    dob.setAttribute('id','dob');   
    let gender = document.createElement("input");
    gender.type="text";
    gender.setAttribute('placeholder','Gender');
    gender.setAttribute('id','gender');
    let contact = document.createElement("input");
    contact.type="text";
    contact.setAttribute('placeholder','Contact Number');
    contact.setAttribute('id','contact');
    let address = document.createElement("input");
    address.type="text";
    address.setAttribute('placeholder','Address');
    address.setAttribute('id','address');
    let visiting = document.createElement("input");
    visiting.type="text";
    visiting.setAttribute('placeholder','Visiting Hospital');
    visiting.setAttribute('id','visiting');
    let appointments = document.createElement("input");
    appointments.type="text";
    appointments.setAttribute('placeholder','Appointments');
    appointments.setAttribute('id','appointments');

    form.append(
        lcode, code,
        lname, name,
        lpassword, password,
        lspeciality, speciality,
        ldegree, degree,
        ldob, dob,
        lgender, gender,
        lcontact, contact,
        laddress, address,
        lvisiting, visiting,
        lappointments, appointments
    );
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Add a Doctor";
    content.append(h2,form);
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
    patients.forEach((patient) => {
        
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
    let plus = document.createElement("i");
    plus.classList.add("far");
    plus.classList.add("fa-plus-square");

    let p = document.createElement("p");
    p.classList.add("add-text");
    p.innerText = "Add a Patient";
    add.append(plus, p);
    content.append(add);

}

/************ Nurse ************/

function handleNurse(event) {
    event.preventDefault();
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Nurses";
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
    nurses.forEach((nurse) => {
        
        let tr = document.createElement("tr");
        let code = document.createElement("td");
        let name = document.createElement("td");
        let detail = document.createElement("td");
        let a = document.createElement("a");
        

        code.innerText = nurse.code;
        name.innerText = nurse.name;
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
    let plus = document.createElement("i");
    plus.classList.add("far");
    plus.classList.add("fa-plus-square");

    let p = document.createElement("p");
    p.classList.add("add-text");
    p.innerText = "Add a Nurse";
    add.append(plus, p);
    content.append(add);

}

/************ Profile ************/

function handleProfile(event) {
    event.preventDefault();
    content.innerHTML = "";
    let h2 = document.createElement("h2");
    h2.innerText = "Profile";
    content.append(h2);
     
    let name = document.createElement("p");
    name.innerText = "Name: " + admin.name;

    let code = document.createElement("p");
    code.innerText = "Code: " + admin.code;

    let dob = document.createElement("p");
    dob.innerText = "DOB: " + admin.dateOfBirth;
    
    let gender = document.createElement("p");
    gender.innerText = "Gender: " + admin.gender;

    let contact = document.createElement("p");
    contact.innerText = "Contact Number: " + admin.contactNumber;

    content.append(name, code, dob, gender, contact);
    
}