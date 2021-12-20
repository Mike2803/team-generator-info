// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Mike', 99, 'colemanmichael671@gmail', 'Vanderbilt University');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Mike', 99, 'nicole.elisaw@gmail', 'Vanderbilt University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Mike', 99, 'nicole.elisaw@gmail.com', 'Vanderbilt University');

    expect(intern.getRole()).toEqual("Intern");
}); 