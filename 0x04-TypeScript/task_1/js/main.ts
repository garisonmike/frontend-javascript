// Task 1: Let's build a Teacher interface

// Define the Teacher interface
interface Teacher {
    readonly firstName: string;       // First name, modifiable only on initialization
    readonly lastName: string;        // Last name, modifiable only on initialization
    fullTimeEmployee: boolean;       // Must always be defined
    yearsOfExperience?: number;      // Optional attribute
    location: string;                // Must always be defined
    [key: string]: any;              // Allows for additional, arbitrary attributes like 'contract' (Index signature)
}

// Example usage of the Teacher interface (from the prompt)
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false, // Additional attribute
};

console.log(teacher3);
// Expected output: Object with all properties including contract: false

// ---

// Task 2: Extending the Teacher class

// Define the Directors interface, extending the Teacher interface
interface Directors extends Teacher {
    numberOfReports: number; // New required attribute for Directors
}

// Example usage of the Directors interface (from the prompt)
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);
// Expected output: Object with all properties including numberOfReports: 17

// ---

// Task 3: Printing teachers

// Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    // Returns the first letter of firstName followed by a period and the full lastName
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage (from the prompt)
console.log(printTeacher("John", "Doe")); // J. Doe

// ---

// Task 4: Writing a class

// Interface for the StudentClass constructor (describes the shape of the constructor function)
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass instance (describes the methods/properties)
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
    // Public properties initialized via the constructor arguments
    firstName: string;
    lastName: string;

    // Constructor to initialize the instance
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to return homework status
    workOnHomework(): string {
        return "Currently working";
    }

    // Method to return the student's first name
    displayName(): string {
        return this.firstName;
    }
}

// Example usage of the StudentClass
const studentInstance = new StudentClass("Alice", "Wonderland");
console.log(studentInstance.displayName()); // Alice
console.log(studentInstance.workOnHomework()); // Currently working