// Function definition
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Interface definition
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


// Interface to describe the constructor
interface StudentConstructorInterface {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface to describe the class itself
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to simulate working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to display the first name
  displayName(): string {
    return this.firstName;
  }
}
