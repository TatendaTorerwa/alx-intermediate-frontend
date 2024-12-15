// Define the DirectorInterface with the expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Define the TeacherInterface with the expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Define the Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Define the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher(); // Return a new Teacher instance
    } else {
      return new Director(); // Return a new Director instance
    }
  } else {
    throw new Error("Salary must be a number");
  }
}

// Type Predicate: isDirector function
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute work depending on employee type
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    // If the employee is a Director, call workDirectorTasks
    console.log(employee.workDirectorTasks()); // Logs: Getting to director tasks
  } else {
    // If the employee is a Teacher, call workTeacherTasks
    console.log(employee.workTeacherTasks());  // Logs: Getting to work
  }
}

// Define a String Literal type Subjects that only allows "Math" or "History"
type Subjects = "Math" | "History";

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    // This should never happen since todayClass is constrained to "Math" or "History"
    return "Invalid class";
  }
}
