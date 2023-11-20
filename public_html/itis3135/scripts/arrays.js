let persons = [];
let salaries = [];

function addSalary() {
    const person = document.getElementById("person-input").value.trim();
    const salary = document.getElementById("salary-input").value.trim();

    if (person === '' || salary === '' || isNaN(salary)) {
        alert("Please enter a valid name and a numeric salary.")
        return;
    }

    persons.push(person);
    salaries.push(parseFloat(salary));

    document.getElementById("person-input").value = '';
    document.getElementById("salary-input").value = '';
    updateDropdown();
    document.getElementById("person-input").focus();
}

function updateDropdown() {
    const select = document.getElementById("select-person");
    select.innerHTML ='';

    for (let i = 0; i < persons.length; i++) {
        const option = document.createElement("option");
        option.value = persons[i];
        option.textContent = persons[i];
        select.appendChild(option);
    }
}

function displayResults() {
    if (salaries.length === 0) {
        alert("Please add valid salaries to get results.");
        return;
    }

    const total = salaries.reduce((acc, curr) => acc + curr, 0);
    const avg = total/salaries.length;
    const high = Math.max(...salaries);

    const results = document.getElementById("results");
    results.innerHTML = `<strong><p>Average Salary:</strong> ${avg.toFixed(2)}</p><p><strong>Highest Salary:</strong> ${high}</p>`;
}

function displaySalary() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = '';

    for (let i = 0; i < persons.length; i++) {
        const row = `<tr><td>${persons[i]}</td><td>${salaries[i]}</td></tr>`;
        tableBody.innerHTML += row;
    }

    if (persons.length === 0) {
        alert("No data is available to display.");
    }
}

window.onload = function() {
    document.getElementById("person-input").focus();
    updateDropdown();
  };

