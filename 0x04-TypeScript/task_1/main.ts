// Teacher.ts

class Teacher {
  // Define the required and optional attributes
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  
  // This index signature allows adding any extra attributes dynamically
  [key: string]: any;

  // Constructor to initialize the required attributes
  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }
}

// Example usage:
const teacher3 = new Teacher('John', 'Doe', false, 'London', 5);
teacher3.contract = false; // Dynamically adding contract attribute
teacher3.someOtherProperty = 'additional info'; // Dynamically adding other properties

console.log(teacher3);
