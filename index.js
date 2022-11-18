// Write your solution in this file!
const  employee = {
    name:"Sam",
    streetAddress: "12 Bervely Hills",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newEmployee={...employee};
   newEmployee[key]=value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
 {
    employee[key]=value;
    return employee;
 }
 function deleteFromEmployeeByKey(employee, key) {
    const _new_={...employee};
    delete _new_.name;
    return _new_;

 }
 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
 }