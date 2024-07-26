import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
console.log(`report: ${report}`);
console.log(`report obj data: ${JSON.stringify(report)}`);
console.log(`report.allEmployees: ${report.allEmployees}`);
console.log(`report.allEmployees obj data: ${JSON.stringify(report.allEmployees)}`);
const reportWithIterator = createIteratorObject(report);
console.log(`reportWithIterator: ${reportWithIterator}`);
for (const item of reportWithIterator) {
  console.log(item);
}
