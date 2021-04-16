let patients = [{
code: 'P01',
password: 'P0000001',
name: 'ABC',
dob: new Date('01/01/2001'),
gender: 'Male',
doctorCode: 'D01',
contactNumber: 1111111111,
address: {
    flatNumber: '001',
    buildingName: 'Paradise',
    landmark: 'Near Gharkul',
    city: 'GHI',
    district: 'fgh',
    state: 'dgher',
    pincode: 111111

},
currentHospital: ['AB', 'CD'],

appointment : [
    {
        date: new Date(2020, 4, 3, 10, 30),
        purpose: 'Blood Test',
        place:'XYX Diagnostics'
    },
    {
        date: new Date(2020, 4, 5, 14, 30),
        purpose: 'Consultation',
        place:'ABC Diagnostics'
    }
],
reports: [{
    date: new Date("2019-02-01"),
    link: "report1"
},
{
    date: new Date('03/02/2019'),
    link: "report2" 
}
]
},
{
    code: 'P02',
    password: 'P0000002',
    name: 'PQR',
    dob: new Date('01/01/2001'),
    gender: 'Male',
    doctorCode: 'D02',
    contactNumber: 1111111111,
    address: {
        flatNumber: 001,
        buildingName: 'SQWR',
        landmark: 'Near Gharkul',
        city: 'GHI',
        district: 'fgh',
        state: 'dgher',
        pincode: 111111
    
    },
    currentHospital: ['AB', 'CD'],
    
    appointment : [
        {
            date: 05/03/2020,
            purpose: 'Blood Test',
            place:'XYX Diagnostics'
        },
        {
            date: 07/03/2020,
            purpose: 'Consultation',
            place:'ABC Diagnostics'
        }
    ],
    reports: [{
        date: 01/02/2019,
        link: "report1"
    },
    {
        date: 03/02/2019,
        link: "report2" 
    }
    ]
    }
];

let admins = [
    {
        code: 'A01',
        password: 'A0000001',
        name: 'Ayush',
        profilePicture:'',
        dateOfBirth: new Date('01/01/2001'),
        gender: 'Male',
        contactNumber: 111111111,
        address:'Dehradun'
    },
    {
        code: 'A02',
        password: 'A0000002',
        name: 'Arti',
        profilePicture:'',
        dateOfBirth: new Date('02/02/2001'),
        gender: 'Female',
        contactNumber: 2222222222,
        address:'Dharmshala'
    },
    {
        code: 'A03',
        password: 'A0000003',
        name: 'Siddharth',
        profilePicture:'',
        dateOfBirth: new Date('03/03/2001'),
        gender: 'Male',
        contactNumber: 3333333333,
        address:'Rajasthan'
    },
    {
        code: 'A04',
        password: 'A0000004',
        name: 'Santosh',
        profilePicture:'',
        dateOfBirth: new Date('04/04/2001'),
        gender: 'Male',
        contactNumber: 4444444444,
        address:'Punjab'
    }
];

let doctors = [
    {
        code: 'D01',
        password: 'D0000001',
        name: 'Ayush',
        profilePicture:'',
        speciality: 'Dentist',
        degree: 'BDS',
        dateOfBirth: new Date('01/01/2001'),
        gender: 'Male',
        contactNumber: 111111111,
        address:'Dehradun',
        visiting: ['ABC', 'PQR'],
        appointments: ["Room no. 10", "Room no. 15", "Room no.20", "Room no.25", "Room no. 30"]
    },
    {
        code: 'D02',
        password: 'D0000002',
        name: 'Arti',
        profilePicture:'',
        speciality: 'Dentist',
        degree: 'BDS',
        dateOfBirth: new Date('02/02/2001'),
        gender: 'Female',
        contactNumber: 2222222222,
        address:'Dharmshala',
        visiting: ['ABC', 'PQR'],
        appointments: ["Room no. 10", "Room no. 15", "Room no.20", "Room no.25", "Room no. 30"]
    },
    {
        code: 'D03',
        password: 'D0000003',
        name: 'Siddharth',
        profilePicture:'',
        speciality: 'Dentist',
        degree: 'BDS',
        dateOfBirth: new Date('03/03/2001'),
        gender: 'Male',
        contactNumber: 3333333333,
        address:'Rajasthan',
        visiting: ['ABC', 'PQR'],
        appointments: ["Room no. 10", "Room no. 15", "Room no.20", "Room no.25", "Room no. 30"]
    },
    {
        code: 'D04',
        password: 'D0000004',
        name: 'Santosh',
        profilePicture:'',
        speciality: 'Dentist',
        degree: 'BDS',
        dateOfBirth: new Date('04/04/2001'),
        gender: 'Male',
        contactNumber: 4444444444,
        address:'Punjab',
        visiting: ['ABC', 'PQR'],
        appointments: ["Room no. 10", "Room no. 15", "Room no.20", "Room no.25", "Room no. 30"]
    }
];

let nurses = [
    {
        code: 'N01',
        password: 'N0000001',
        name: 'Sara',
        profilePicture:'',
        dateOfBirth: new Date('01/01/2001'),
        gender: 'Female',
        contactNumber: 111111111,
        address:'Dehradun'
    },
    {
        code: 'N02',
        password: 'N0000002',
        name: 'Emma',
        profilePicture:'',
        dateOfBirth: new Date('02/02/2001'),
        gender: 'Female',
        contactNumber: 2222222222,
        address:'Dharmshala'
    },
    {
        code: 'N03',
        password: 'N0000003',
        name: 'Mia',
        profilePicture:'',
        dateOfBirth: new Date('03/03/2001'),
        gender: 'Male',
        contactNumber: 3333333333,
        address:'Rajasthan'
    },
    {
        code: 'N04',
        password: 'N0000004',
        name: 'Sophia',
        profilePicture:'',
        dateOfBirth: new Date('04/04/2001'),
        gender: 'Male',
        contactNumber: 4444444444,
        address:'Punjab'
    }
];

let pharmacies = [
    {
        name: "ABC",
        contactNumber: 1111111111,
        address: "Himachal Pradesh",
    },
    {
        name: "PQR",
        contactNumber: 2222222222,
        address: "Maharashtra",
    },
    {
        name: "MNO",
        contactNumber: 333333333,
        address: "Bihar",
    },
    {
        name: "XYZ",
        contactNumber: 4444444444,
        address: "Delhi",
    }

];

let labs = [
    {
        name: "abc",
        contactNumber: 1111111111,
        address: "Himachal Pradesh",
    },
    {
        name: "pqr",
        contactNumber: 2222222222,
        address: "Maharashtra",
    },
    {
        name: "mno",
        contactNumber: 333333333,
        address: "Bihar",
    },
    {
        name: "xyz",
        contactNumber: 4444444444,
        address: "Delhi",
    }

];


