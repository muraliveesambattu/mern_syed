fetch("http://localhost:3000/latestUsers").then(function (rawdata){
    return rawdata.json()
}).then(function (response){
    console.log(response);
    displayUsers(response)
})

function displayUsers(users){
    users.forEach(user => {
        console.log(user);
        const myTr = document.createElement("tr");
        // myTr.innerHTML = "<td>"+user.id+"</td>"
        myTr.innerHTML =    `<td>${user.id}</td>
                            <td>${user.fname}</td>
                            <td>${user.lname}</td>
                            <td>${user.email}</td>
                            <td>${user.state}</td>
                            <td>${user.gender}</td>
                            <td>${user.subjects}</td>
                            <td>${user.dob}</td>
                            <td>${user.login}</td>
                             <td> <button>Edit User</button> </td>
                              <td><button onclick="handleDelete(${user.id})">Delete User</button></td>
        `
        
        document.querySelector("tbody").appendChild(myTr);
    });
}

function handleDelete(id){
    console.log(id);
    window.location.href="delete.html?"+id
}