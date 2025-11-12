# Task 5 - Nominal Typing with Branded Types

## Description

This task demonstrates nominal typing in TypeScript using branded types to create type-safe distinctions between structurally identical types.

## Learning Objectives

- Understand nominal vs structural typing
- Implement branded types
- Create type-safe functions for similar data structures
- Prevent accidental type confusion

## Key Concepts

### Branded Types
Both `MajorCredits` and `MinorCredits` have:
- A `credits` property (number)
- A `__brand` property for nominal typing

The brand property ensures that even though both interfaces have the same structure, TypeScript treats them as distinct types.

### Type Safety
The functions `sumMajorCredits` and `sumMinorCredits` only accept their respective types, preventing mixing of major and minor credits even though they have identical structure.

## Example

```typescript
// This works
const major1: MajorCredits = { credits: 3 } as MajorCredits;
const major2: MajorCredits = { credits: 4 } as MajorCredits;
sumMajorCredits(major1, major2); // OK

// This would cause a type error
const minor1: MinorCredits = { credits: 2 } as MinorCredits;
sumMajorCredits(major1, minor1); // ERROR: Type mismatch
```

## Running the Project

```bash
npm install
npm run build
```
