export default function updateStudentGradeByCity(listStudents, targetLocation, newGrades) {
  return listStudents
    .filter(({ location }) => location === targetLocation)
    .map((obj) => {
      // { studentId } is called object destructuring
      const xtargetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      // { grade: 'N/A' } is called destructure assignment
      const { grade = 'N/A' } = xtargetNewGrade.length > 0 ? xtargetNewGrade[0] : {};
      // the 3 dots are called spread operator
      return { ...obj, grade };
    });
}
