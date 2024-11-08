# The Significance of Union and Intersection Types in TypeScript

In TypeScript, **union types** and **intersection types** are two powerful features that help us write flexible and type-safe code. Let’s explore these types with simple explanations and code examples.

## Union Types

A **union type** allows a variable to hold more than one type. We define it using the pipe (`|`) symbol.

### Example:

```typescript
function printId(id: string | number): void {
  console.log("ID:", id);
}

printId(123);         // Accepts number
printId("ABC123");    // Accepts string


Here, the function printId accepts either a string or a number, making it flexible for different data types.

Type Guards with Union Types
We can use type guards to narrow down the type within a union.

function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("String length:", value.length);
  } else {
    console.log("Number doubled:", value * 2);
  }
}

processValue("Hello");
processValue(42);
In this case, TypeScript narrows the type based on the typeof check, ensuring we handle strings and numbers differently.

Intersection Types
An intersection type combines multiple types, meaning a variable must satisfy all types at once. We define it using the ampersand (&) symbol.

Example:
type User = { name: string; email: string };
type Admin = { adminLevel: number; accessRights: string[] };

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  adminLevel: 3,
  accessRights: ["read", "write", "delete"]
};

console.log(admin);
Here, AdminUser combines both User and Admin, so the object must have properties from both types.

Key Differences: Union vs. Intersection
| Feature | Union Type (|) | Intersection Type (&) | |-----------------|--------------------------------|-------------------------------------| | Meaning | "This or that" | "This and that" | | Use Cases | Flexible inputs, dynamic data | Combining multiple roles/structures |

Conclusion
Union Types (|) are useful when a variable can hold multiple types.
Intersection Types (&) are used to combine multiple types, ensuring that an object satisfies all constraints.
These features enhance our ability to create flexible, type-safe TypeScript applications.
