


# What is TypeScript?

- Builds on top of JavaScript by adding types (string, number, arrays, undefined, null, objects ++)


 
```TypeScript
//
// JavaScript
//
const name = "John"
const names = ["John", "Peter"]

const calculateVAT = (cost) => {
  return cost*0.25
}


//
// TypeScript
//
const name: string = "John"
const names: string[] = ["John", "Peter"]
const calculateVAT = (cost: number): number => {
    return cost*0.25
}

```



- How does it work? TypeScript checks types before converting the code to JavaScript. (Your browser don't understand TypeScript, but can execute TypeScript written apps because the code is converted to JavaScript at build time)
- Because of this, errors are checked at compile time (not at run time)


# Benefits of TypeScript
- Self-documenting code
- Can catch more bugs
- Simplifies maintenance and speeds up refactoring
- Rich IDE support - code navigation and autocompletion



# TypeScript basics
```TypeScript
export type Pizza = {
  name: string
  ingredients: Ingredient[]
  price: number
}

export type Ingredient = {
  name: string
  price: number
}


// Union types
export type Ingredient = {
  name: "cheese" | "red peppers" | "pepperoni"
  price: number
}

// Intersection types
type A =  { a: number }
type B =  { b: number }
type C = A & B  // Type of C: { a: number, b: number  }
const c: C = {a: 1, b: 2}






// Optional properties
export type Ingredient = {
  name: string
  price: number
  allergies?: string[] // string[] or undefined
  vendor?: Vendor // string or undefined
}

export type Vendor = {
  name: string
  address: string
}






// Chaining operator
const ingredient: Ingredient = {
  name: "cheese", 
  price: 0.9, 
  allergies: ["milk"]
}

ingredient?.vendor?.address // returns undefined
ingredient.vendor.address   // gives error: "Cannot read properties of undefined (reading 'address')". (This error is catched in TS but not with JS!)



// Syntax for arrays
const x: (number | string)[] = ["hello", "world", 42, 99, 123]
const y: [string, string, number] = ["hello", "world", 42]


// QUIZ! What is the inferred type of firstNumber?
const numbers: number[] = []
let firstNumber = numbers[0]







//  Generic types
See generics-example.tsx




  







```



