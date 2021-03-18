function addQfTextarea() {
    console.log("Adding new textarea...for Qualifications field");

    //creating new node
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('qualifications')

    //getting location where to put it
    let QfDiv = document.getElementById('QfDiv');
    let addQfBtnContainer = document.getElementById('addQfBtnContainer');

    //putting it now as a child of QfDiv
    QfDiv.insertBefore(newNode, addQfBtnContainer);

}

function addExpTextarea() {
    console.log("Adding new textarea...for Experience field");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('experiences')

    let ExpDiv = document.getElementById('ExpDiv');
    let addExpBtnContainer = document.getElementById('addExpBtnContainer');

    ExpDiv.insertBefore(newNode, addExpBtnContainer);

}

function generateResume() {
    console.log("Generating resume..");

    let flag = false;

    let name = document.getElementById('name').value.trim();
    let dob = document.getElementById('dob').value;
    let contacts = document.getElementById('contact').value.trim();
    let email = document.getElementById('email').value.trim();
    let objective = document.getElementById('objective').value;


    let qfArray = document.getElementsByClassName('qualifications');
    let expArray = document.getElementsByClassName('experiences');

    if (name != "" && dob != "" && contacts != "" && email != "" && objective != "") {
        document.getElementById('nameTmp').innerText = name;
        document.getElementById('dobTmp').innerText = dob;
        document.getElementById('contactTmp').innerText = contacts;
        document.getElementById('emailTmp').innerText = email;
        document.getElementById('objectiveTmp').innerText = objective;

        let listsOfQf = "";

        for (let q of qfArray) {
            listsOfQf = listsOfQf + "<li>" + q.value + "</li>";
        }

        document.getElementById("qualificationsTmp").innerHTML = listsOfQf;


        let listsOfExp = "";
        for (let exp of expArray) {
            listsOfExp = listsOfExp + "<li>" + exp.value + "</li>";
        }
        document.getElementById("experiencesTmp").innerHTML = listsOfExp;

        document.getElementById('resumeSection').style.display = "none";
        document.getElementById('templateSection').style.display = "block";

    }

    else {
        swal("Fill all details !!", "", "warning");
    }

}
function printCV() {
    window.print();
}