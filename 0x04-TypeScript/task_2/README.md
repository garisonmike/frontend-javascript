# Task 2 - Classes and Type Guards

## Description

This task demonstrates interface implementation with classes, function overloading, and type narrowing with type guards.

## Learning Objectives

- Implement interfaces with classes
- Create multiple classes implementing different interfaces
- Use union types in function returns
- Implement type guard functions
- Work with type predicates

## Key Concepts

### Director & Teacher Classes
- Both implement their respective interfaces
- Different implementations of common method names
- Demonstrates polymorphism

### createEmployee Function
- Returns different class instances based on salary
- Uses union types (`Director | Teacher`)

### Type Guards
- `isDirector()` function uses type predicates
- Enables type-safe narrowing in conditional logic
- `executeWork()` function demonstrates type guard usage

## Running the Project

```bash
npm install
npm run build
```
