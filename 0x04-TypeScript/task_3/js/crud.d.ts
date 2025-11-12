// Task 8: Ambient Namespaces - crud.d.ts

// Import types from interface.ts for use in this ambient declaration file
import { RowElement, RowID } from "./interface";

// Declare the module for the crud.js file
declare module 'crud' {
    // Function to insert a row, accepts a RowElement and returns a RowID
    export function insertRow(row: RowElement): RowID;

    // Function to delete a row, accepts a RowID and returns void (or undefined)
    export function deleteRow(rowId: RowID): void;

    // Function to update a row, accepts RowID and new RowElement, returns RowID
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}