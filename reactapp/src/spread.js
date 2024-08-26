const hStudentNames = ["Alice", "Frank", "Charlie"];
const iStudentNames = ["David", "Eve","Bob"];

// const allStudentNames = hStudentNames.concat(iStudentNames);

// spread operator(..., ..., ...)

const allStudentNames = [
    "Random Student 1",
    ...hStudentNames,
    ...iStudentNames,
    "Gloria",
    "Helen",
];
console.log("🚀 ~ allStudentNames:", allStudentNames);

// Rest operator

// Array Destruction

// Sort

allStudentNames.sort();
console.log("🚀 ~ allStudentNames:", allStudentNames);

const [firstStudent,secondStudent,thirdStudent,...restStudents] = allStudentNames;
console.log("🚀 ~ firstStudent:", firstStudent);
console.log("🚀 ~ secondStudent:", secondStudent);
console.log("🚀 ~ thirdStudent:", thirdStudent);
console.log("🚀 ~ restStudents:", restStudents);
