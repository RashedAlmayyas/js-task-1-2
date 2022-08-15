function EmployeeObj() {
    this.id = "";
    this.name = "";
    this.Department = "";
    this.level = "";
    this.url = "";

}
var newEmployee = new EmployeeObj();

function createEmployee() {
    newEmployee.id = Employeeform.id.value;
    newEmployee.name = Employeeform.name.value;
    newEmployee.Department = Employeeform.Department.value;
    newEmployee.level = Employeeform.level.value;
    newEmployee.url = Employeeform.url.value;

    alert("Hello " + newEmployee.level);
}
/*const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addBookToLibrary)

const form = document.querySelector("#form");



function employee(id,name,Department,level,url){
    this.id=id.form.value;
    this.name=name.form.value;
    this.Department=dep.form.value;
    this.level=level.form.value;
    this.url=url.form.value;
    this.salary=calc(salary);
} 
    function calc(salary){
        switch(salary){
            case"junior":
            return Math.round(Math.random()*500 +500);
            break;
            case"mid senior":
            return Math.round(Math.random()*500+1000);
            break;
            case"senior":
            return Math.round(Math.random()*500+1500);
            break;
    
        }
    }

    
let employees = []
let empl;

function ademployee() {
  showForm.style.display = "none";
  closeForm.style.display = "none";

  empl = new employee(id,name,Department,level,url);
  employees.push(empl);
  render();

  form.reset();
}

function render() {
    employees.forEach((empl) => {
  const newElement = document.createElement("article");
  newElement.innerHTML = `
  <p> ${empl.id} </p>
  <p> by ${empl.name} </p>
  <p> ${empl.Department} </p>
  <p> ${empl.level} </p>
  <p> ${empl.url} </p>

  `;
  document.querySelector(".employee").appendChild(newElement);
  });
}
alert(id , name )

*/
/*
    let employee = [];
    // example {id:1592304983049, title: 'Deadpool', year: 2015}
    const addemp = (ev)=>{
        ev.preventDefault();  //to stop the form submitting
        let employee1 = {
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            Department: document.getElementById('Department').value,
            Level: document.getElementById('Level').value,


        }
        movies.push(employee1);
        document.forms[0].reset(); // to clear the form for the next entries
        //document.querySelector('form').reset();

        //for display purposes only
        console.warn('added' , {employee} );
        let pre = document.querySelector('#msg pre');
        pre.textContent = '\n' + JSON.stringify(employee, '\t', 2);

        //saving to localStorage
        localStorage.setItem('MyMovieList', JSON.stringify(employee) );
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addemp);
    });*/