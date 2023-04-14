


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



- How does it work? TypeScript checks types before converting the code to JavaScript. (Your browser don't understand TypeScript, but can execute TypeScript written apps because he code is converted to JavaScript at build time)
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
  vendor?: string // string or undefined
}



// Chaining operator
const ingredient: Ingredient = {
  name: "cheese", 
  price: "0.9", 
  allergies: ["milk"]
}

ingredient.vendor? // undefined but gives no error
  
  
  
// More generic types
type FormData = {[key: string]: number | string}

TODO generics

  
// Nullish Coalescing operator 
const foo = null ?? 'default string';
const foo2 = null || 'default string';
console.log(foo);   // output: "default string"
console.log(foo2);  //output: "default string"


const baz = 0 ?? 42;
const baz2 = 0 || 42;
console.log(baz);  // output: 0
console.log(baz2); // output: 42






```



