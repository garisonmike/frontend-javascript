// Define the Student interface
interface Student {
  firstName: string; // The student's first name
  lastName: string;  // The student's last name
  age: number;       // The student's age
  location: string;  // The student's location (city/country)
}

// Create two student objects that conform to the Student interface
const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 23,
  location: "New York"
};

const student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  location: "Los Angeles"
};

// Create an array of Student objects
const studentsList: Student[] = [student1, student2];

// Get the document body element to append the table
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

// Create the main table element
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const tableBody: HTMLTableSectionElement = document.createElement("tbody");

// Create the header row
const headerRow: HTMLTableRowElement = document.createElement("tr");

// Create and append header cells
const headerCell1: HTMLTableCellElement = document.createElement("th");
headerCell1.textContent = "First Name";
headerRow.appendChild(headerCell1);

const headerCell2: HTMLTableCellElement = document.createElement("th");
headerCell2.textContent = "Location";
headerRow.appendChild(headerCell2);

// Append the header row to the table head
tableHead.appendChild(headerRow);

// Iterate over the studentsList to populate the table body
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  // Create cell for the first name
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  // Create cell for the location
  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});

// Append the table head and body to the table
table.appendChild(tableHead);
table.appendChild(tableBody);

// Append the final table to the document body
body.appendChild(table);