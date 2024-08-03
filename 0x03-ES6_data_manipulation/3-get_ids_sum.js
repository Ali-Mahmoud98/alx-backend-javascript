export default function getStudentIdsSum(students) {
  return Array.isArray(students) ? students.reduce((acc, student) => acc + student.id, 0) : 0;
}
