// Task 8: Ambient Namespaces - main.ts

// Triple slash directive to include the ambient declaration file
/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowElement, RowID } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create a row object of type RowElement
const row: RowElement = {
    firstName: "Guillaume", // Initial first name
    lastName: "Salva",    // Initial last name
};

// Create a newRowID constant and assign the result of insertRow
const newRowID: RowID = CRUD.insertRow(row);
// This will log the insertion and return a number (the RowID)

// Create an updatedRow object by spreading the original row and adding age
const updatedRow: RowElement = {
    ...row,                 // Spread existing properties (firstName, lastName)
    age: 23,                 // Add the new age field
};

// Call updateRow with the newRowID and the updated row object
CRUD.updateRow(newRowID, updatedRow);

// Call deleteRow with the newRowID
CRUD.deleteRow(newRowID);