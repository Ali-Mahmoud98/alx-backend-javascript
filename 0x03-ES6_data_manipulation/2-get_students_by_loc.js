export default function getStudentsByLocation(students, city) {
  // if (Array.isArray(students) && typeof city === 'string') {
  //   return students.filter(student => student.location === city);
  // }
  // return [];
  // return students.filter((student) => student.location === city);
  return students.filter(({ location }) => location === city);
}
