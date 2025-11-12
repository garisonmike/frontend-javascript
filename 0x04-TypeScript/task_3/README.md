# Task 3 - Ambient Declarations

## Description

This task introduces ambient declarations and working with external JavaScript libraries that don't have TypeScript definitions.

## Learning Objectives

- Create ambient type declarations (`.d.ts` files)
- Use triple-slash directives
- Import and use external JavaScript modules with TypeScript
- Define types for existing JavaScript code

## Key Files

### interface.ts
- Defines `RowID` type and `RowElement` interface
- Exported for use in other modules

### crud.d.ts
- Ambient declaration file for the `crud.js` module
- Declares types for external JavaScript functions
- Uses triple-slash reference directive

### main.ts
- Demonstrates using typed external modules
- Shows type safety when calling JavaScript functions

## Running the Project

```bash
npm install
npm run build
```

## Note

The `crud.js` file is a pre-existing JavaScript file. The `.d.ts` file provides TypeScript type information for it without modifying the original JavaScript code.
