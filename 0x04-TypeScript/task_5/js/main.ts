// MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

// MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'MajorCredits' };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'MinorCredits' };
}

// Example Usage:
const major1: MajorCredits = { credits: 20, brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 30, brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 15, brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 25, brand: 'MinorCredits' };

console.log(sumMajorCredits(major1, major2)); // { credits: 50, brand: 'MajorCredits' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 40, brand: 'MinorCredits' }
