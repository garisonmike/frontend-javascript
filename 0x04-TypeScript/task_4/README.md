# Task 4 - Namespaces and Declaration Merging

## Description

This task explores TypeScript namespaces, declaration merging, and organizing code across multiple files without using ES6 modules.

## Learning Objectives

- Create and use namespaces
- Implement declaration merging
- Organize code across multiple files with triple-slash directives
- Extend interfaces within namespaces
- Work with inheritance in namespaces

## Project Structure

### subjects/
- **Teacher.ts** - Base Teacher interface in Subjects namespace
- **Subject.ts** - Base Subject class
- **Cpp.ts** - C++ subject implementation with declaration merging
- **Java.ts** - Java subject implementation
- **React.ts** - React subject implementation

### main.ts
Demonstrates:
- Creating subject instances
- Setting teachers with specific experience
- Calling methods from different subject classes

## Key Concepts

- **Declaration Merging**: Extending the Teacher interface in each subject file
- **Namespaces**: Organizing related code under the `Subjects` namespace
- **Inheritance**: Subject classes extending a common base

## Running the Project

```bash
npm install
npm run build
```

Note: This task uses namespaces instead of ES6 modules to demonstrate TypeScript's namespace feature.
