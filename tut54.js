//Alert
alert("Alert does not return anything");

//Prompt
let age = prompt("What's your age?","0");
if (age>18){
    console.log("You are allowed to get married");
}
else{
    console.log("You are not allowed to get married");
}

//Confirm
deletePost = confirm("Do you want to delete?");
if (deletePost){
    console.log("The post is deleted");
}
else {
    console.log("The post cannot be deleted");
}