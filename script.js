console.log("Hello, World! Welcome to the Student Management App.");

const form = document.querySelector('#add-student form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const studentList = document.querySelector('#student-list ul');



function addStudent(name, email) {
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${email}`; 
    studentList.appendChild(listItem); 
}

function renderStudentList(students) {
    // Clear the current list
    studentList.innerHTML = '';
    
    // Loop through the student array and add each to the list
    students.forEach(student => {
        addStudent(student.name, student.email);
    });
}


    
// const sampleStudents = [
//     { name: 'John Doe', email: 'john.doe@example.com' },
//     { name: 'Jane Smith', email: 'jane.smith@example.com' }
// ];

// renderStudentList(sampleStudents);



const students = []; // Array to store student data

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
        alert('Please fill out both fields!');
        return;
    }

    // Add the new student to the array
    students.push({ name, email });

    // Re-render the student list
    renderStudentList(students);

    nameInput.value = '';
    emailInput.value = '';

    alert("Student Added Successfully!");
});

