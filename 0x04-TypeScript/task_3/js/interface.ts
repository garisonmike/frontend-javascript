// Task 8: Ambient Namespaces - interface.ts

// Type alias for RowID
export type RowID = number;

// Interface for RowElement
export interface RowElement {
    firstName: string; // Required first name
    lastName: string;  // Required last name
    age?: number;      // Optional age property
}