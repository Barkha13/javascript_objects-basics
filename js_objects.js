// Print all of the students and their cohort.

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for (var i in students){
    console.log("Name:",students[i].name,",Cohort:",students[i].cohort);   
}

// Print out the below object to match the example.
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(var i in users){
     for (var j = 0;j <users[i].length; j++){
        console.log(j+" - "+users[i][j].last_name+", "+users[i][j].first_name+" - "+(users[i][j].last_name.length+users[i][j].first_name.length));
     }
 }
