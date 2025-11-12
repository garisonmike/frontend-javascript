// Task 5: Advanced types Part 1

// Director Interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director Class implementation
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    // Note: getToWork was likely a typo in the prompt, should be getCoffeeBreak
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// Teacher Class implementation
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Type alias for Employee (Union Type)
type Employee = Director | Teacher;

// Function to create an employee based on salary
function createEmployee(salary: number | string): Employee {
    // Parse salary if it's a string, otherwise use the number directly
    let numericSalary: number;
    if (typeof salary === 'string') {
        // Basic conversion, removing non-numeric characters before parsing
        numericSalary = parseInt(salary.replace(/\D/g, ''), 10);
    } else {
        numericSalary = salary;
    }

    // Check the salary threshold
    if (numericSalary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Example usage (from the prompt)
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')); // Director

// ---

// Task 6: Creating functions specific to employees

// Type predicate function to check if an employee is a Director
function isDirector(employee: Employee): employee is Director {
    // Check if the employee object is an instance of the Director class
    return employee instanceof Director;
}

// Function to execute work based on the employee type
function executeWork(employee: Employee): string {
    if (isDirector(employee)) {
        // TypeScript knows it's a Director here
        return employee.workDirectorTasks();
    } else {
        // If not a Director, it must be a Teacher (due to the Employee Union Type)
        return employee.workTeacherTasks();
    }
}

// Example usage (from the prompt)
console.log(executeWork(createEmployee(200)));  // Getting to work (Teacher)
console.log(executeWork(createEmployee(1000))); // Getting to director tasks (Director)

// ---

// Task 7: String literal types

// String literal type allowing only 'Math' or 'History'
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        // Since Subjects is a literal type, the only other option is 'History'
        return 'Teaching History';
    }
}

// Example usage (from the prompt)
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History