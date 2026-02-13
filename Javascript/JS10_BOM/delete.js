const pageurl = window.location.href;
const qIndex = window.location.href.indexOf("?")
const id = window.location.href.substr(qIndex+1)

fetch("http://localhost:3000/latestUsers/"+id).then(function (rawdata){
    return rawdata.json()
}).then(function (response){
    console.log(response);
})