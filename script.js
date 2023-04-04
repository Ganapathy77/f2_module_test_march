const studentNameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const gpaElement = document.getElementById('gpa');
const ageElement = document.getElementById('age');
const degreeElement = document.getElementById('degree');
const btnElement = document.getElementById('btn');
const searchElement = document.getElementById('search');
const tableBody = document.querySelector("tbody");
const studentDetails = [
];
let editIndex ;

function handleEdit(event) {
    const editElement = event.target;
    const id = editElement.id;
    let testArr = id.split('-');
    let index = testArr[0] - 1;
    let editData = studentDetails[index];
    studentNameElement.value = editData.name;
    emailElement.value = editData.email;
    gpaElement.value = editData.grade;
    ageElement.value = editData.age;
    degreeElement.value = editData.degree;

    btnElement.textContent = "Edit Student"
    editIndex = index;

    // let namePrompt = prompt("Please edit your name if wanted", editData.name);
    // let emailPrompt = prompt("Please edit your email if wanted", editData.email);
    // let emailCheck = true;
    // if (studentDetails.length > 0) {
    //     studentDetails.forEach((element, i) => {
    //         if (element.email == emailPrompt && i != index) {
    //             emailCheck = false;
    //             alert("email id already registered ... edit failed... try again!!!")
    //         }
    //     })
    // }
    // if (!emailCheck) {
    //     return;
    // }
    // let agePrompt = prompt("Please edit your age if wanted", editData.age);
    // let ageCheck = true;
    // if (Number.parseInt(agePrompt) != agePrompt) {
    //     ageCheck = false;
    //     alert("invalid age... edit failed...try again!!!")
    // }
    // if (!ageCheck) {
    //     return;
    // }
    // let gpaPrompt = prompt("Please edit your gpa if wanted", editData.grade);
    // let gpaCheck = true;
    // if (Number.parseFloat(gpaPrompt) != gpaPrompt) {
    //     gpaCheck = false;
    //     alert("invalid gpa... edit failed...try again!!!")
    // }
    // if (!gpaCheck) {
    //     return;
    // }
    // let degreePrompt = prompt("Please edit your degree if wanted", editData.degree);

    // editData.name = namePrompt != null ? namePrompt : editData.name;
    // editData.email = emailPrompt != null ? emailPrompt : editData.email;
    // editData.age = agePrompt != null ? agePrompt : editData.age;
    // editData.grade = gpaPrompt != null ? gpaPrompt : editData.grade;
    // editData.degree = degreePrompt != null ? degreePrompt : editData.degree;

    // studentDetails[index] = editData;
    // renderStudentDetailsInsideTable();

}

function handleDelete(event) {
    const deleteElement = event.target;
    const id = deleteElement.id;
    let testArr = id.split('-');
    let index = testArr[0] - 1;

    studentDetails.splice(index, 1);
    renderStudentDetailsInsideTable();
}
function createTableRow(data, tableBody, studentDetailId) {

    const tr = document.createElement("tr");
    tr.id = studentDetailId;

    const idTd = document.createElement("td");
    idTd.textContent = studentDetailId;

    const studentName = document.createElement("td");
    studentName.textContent = data.name;

    const email = document.createElement("td");
    email.textContent = data.email;


    const gpa = document.createElement("td");
    gpa.textContent = data.grade;

    const age = document.createElement("td");
    age.textContent = data.age;



    const degree = document.createElement("td");
    degree.classList.add('flex');


    const span = document.createElement("span");
    span.textContent = data.degree;
    const span0 = document.createElement('span');
    span0.classList.add('edit-delete')
    const span1 = document.createElement('span');
    span1.innerHTML = `<i class="bi bi-pencil-square" id="${studentDetailId}-edit"></i>`;

    const span2 = document.createElement('span');
    span2.innerHTML = `<i class="bi bi-trash3" id="${studentDetailId}-delete"></i>`;

    span1.addEventListener("click", handleEdit);

    span2.addEventListener("click", handleDelete);

    degree.appendChild(span);
    span0.appendChild(span1);
    span0.appendChild(span2)
    degree.appendChild(span0)

    tr.appendChild(idTd);
    tr.appendChild(studentName);
    tr.appendChild(email);
    tr.appendChild(age);
    tr.appendChild(gpa);
    tr.appendChild(degree);

    tableBody.appendChild(tr);
}

function renderStudentDetailsInsideTable() {

    tableBody.innerHTML = "";

    if (studentDetails.length == 0) {
        tableBody.innerHTML = `<tr class="empty-td">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>`
    }
    else {
        studentDetails.map(function (studentDetail, index) {

            createTableRow(studentDetail, tableBody, index + 1);
        })
    }


}

function handleFormSubmit() {
    const studentName = studentNameElement.value;
    studentNameElement.value = "";

    const email = emailElement.value;
    emailElement.value = "";

    const gpa = gpaElement.value;
    gpaElement.value = "";

    const age = ageElement.value;
    ageElement.value = "";

    const degree = degreeElement.value;
    degreeElement.value = "";

    if (studentName && email && gpa && age && degree) {
        if (studentDetails.length == 0) {
            document.querySelector('table').deleteRow(1)
        }
        if (btnElement.textContent == 'Edit Student') {
            let check = true;
            if (studentDetails.length > 0) {
                studentDetails.forEach((element, index) => {
                    // if(element.name == studentName){
                    //     check = false;
                    //     alert("Name ")
                    // }
                    if (element.email == email && index!=editIndex) {
                        check = false;
                        btnElement.textContent = 'Add student';
                        alert("email id already registered...Edit failed...Try again!!!")
                    }
                })
            }
            if (check) {
                const studentDetail = {
                    name: studentName,
                    email: email,
                    age: age,
                    grade: gpa,
                    degree: degree
                };
                studentDetails[editIndex] = studentDetail;
                btnElement.textContent = 'Add student';
                // console.log(studentDetail)
                // studentDetails.push(studentDetail);
                renderStudentDetailsInsideTable();
            }
        }
        else {
            let check = true;
            if (studentDetails.length > 0) {
                studentDetails.forEach((element) => {
                    // if(element.name == studentName){
                    //     check = false;
                    //     alert("Name ")
                    // }
                    if (element.email == email) {
                        check = false;
                        alert("email id already registered")
                    }
                })
            }
            if (check) {
                const studentDetail = {
                    name: studentName,
                    email: email,
                    age: age,
                    grade: gpa,
                    degree: degree
                };
                // console.log(studentDetail)
                studentDetails.push(studentDetail);
                renderStudentDetailsInsideTable();
            }
        }
        

    }
    else {
        alert("You are trying to enter empty details");
    }

}

function searchFunc() {
    var input, filter, table, tr, nameCheck, emailCheck, degreeCheck, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        nameCheck = tr[i].getElementsByTagName("td")[1];
        emailCheck = tr[i].getElementsByTagName("td")[2];
        degreeCheck = tr[i].getElementsByTagName("td")[5];
        let searchCheck = true;
        if (nameCheck) {
            txtValue = nameCheck.textContent || nameCheck.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                searchCheck = false
            } else {
                tr[i].style.display = "none";
            }
        }
        if (emailCheck && searchCheck) {
            txtValue = emailCheck.textContent || emailCheck.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                searchCheck = false
            } else {
                tr[i].style.display = "none";
            }
        }
        if (degreeCheck && searchCheck) {
            txtValue = degreeCheck.textContent || degreeCheck.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                searchCheck = false
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

searchElement.addEventListener('keyup', searchFunc)
btnElement.addEventListener('click', handleFormSubmit);