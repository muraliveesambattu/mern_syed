// 1. Javscript Math 
// 2. Javascript Date 
// 3. Javascript Regular Expression 

// 4. DOM 
// 5. BOM 
// 6. How to Capture Radio Buttons Value 
// 7. How to Capture Checkbox Value 
// 8. How to read Date and Time from the Form   
// 9. Form Validation 
// 10. Var , let , Const 

function createUser() {
    // let , const 
    let userObj = {
        userid: Math.round(Math.random() * 1000),
        fname: document.getElementById("fname").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        state: document.getElementById("state").value,
        subjects: [],
        // dob: new Date(document.getElementById("dob").value).toLocaleDateString(),
        login: new Date(document.getElementById("login").value).toLocaleTimeString()
    }

    const allRadioButtons = document.getElementsByName("gender");
    allRadioButtons.forEach((element) => {
        if (element.checked == true) {
            userObj.gender = element.value
        }
    })

    const allCheckBoxes = document.getElementsByName("subject");

    allCheckBoxes.forEach((element) => {
        if (element.checked == true) {
            userObj.subjects.push(element.value)
        }
    })

    window.location.href = "usersTable.html"
}