const resume = {
    "basics": {
        "name": "AJITH A",
        "email": "ajithachumech23@gmail.com",
        "phone": 8675079317,
        "degree": "B.E",
        "department": "Mechanical",
        "location": {
            "address": "11/145 Glendale Estate,coonoor.",
            "pinCode": 643102,
            "city": "Coimbatore",
            "state": "Tamilnadu",
            "country": "India"
        }
    },
    "profile summary": [{
        "summary": "Intend to build my career in a good organization with committed and dedicated people, which will help me explore myself and to realize my potential. Willing to work in a challenging and creative environment"
    }
],

    "experience":[ {
        "company": "LEE SPRING COMPANY INDIA PVT LTD",
        "Position": "SALES ENGINEER",
        "startDate": "24-2-2023",
        "endDate": "30-4-2024",
        "Responsibilities": [
            "Providing technical support to customers",
            "develop new products",
            "create new customer business",
            "payment folow-up"
        ]
    }
],

    "education": [{
        "institution": "SASURIE Academy Of Engineering",
        "department": "Mechaanical",
        "studyType": "fulltime",
        "batch start year": 2014,
        "batch end year": 2018,
        "cgpa": 7.0
    }
],

    "skills": [{
        "name": "html,css,javascript,react js",
        "level": "beginer"
    }
],

    "languages": [{
        "language": "Tamil,Enlish"
    },
],

    "interest": [{
        "hobbies": "photography"
    }
    ]
}

// using for loop
console.log( "Using for loop:" );
for ( let i = 0; i < resume.education.length; i++ ) {
    console.log( resume.education[ i ] );
}
console.log( "\n" );

//using for in
console.log( "Using for in loop:" );
for ( let key in resume.basics ) {
    console.log( `${ key }: ${ resume.basics[ key ] }` );
}
console.log( "\n" );

//using for of
console.log( "Using for of loop:" );
for ( let interest of resume.interest ) {
    console.log( interest );
}
console.log( "\n" );

//using for each
console.log( "Using forEach:" );
resume.experience.forEach( ( job ) => {
    console.log(` Position: ${ job.Position }`);
    console.log( "Responsibilities:" );
    job.Responsibilities.forEach( ( responsibility, index ) => {
        console.log( `${ index + 1}.${ responsibility } `);
} );
});