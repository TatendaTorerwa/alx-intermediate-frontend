// Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Tatenda",
  lastName: "Torerwa",
  age: 29,
  location: "number 7 Blairgowrie",
};

const student2: Student = {
  firstName: "Nobert",
  lastName: "Mureriwa",
  age: 31,
  location: "Randburg Square",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const body = document.querySelector("body");

if (body) {
  const table = document.createElement("table");
  const tableHeader = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  // Add header row to the table
  tableHeader.innerHTML = `
    <tr>
      <th>First Name</th>
      <th>Location</th>
    </tr>
  `;
  table.appendChild(tableHeader);

  // Iterate through the studentsList and add rows
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.location}</td>
    `;
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  body.appendChild(table);
}
