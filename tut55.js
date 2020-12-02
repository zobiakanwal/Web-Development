console.log('Code # 55')

var i = 0;
for(i=0;i<4;i++){
    console.log(i);
}

let names = ['Ali', 'Ahsan', 'Arman', 'Zobia'];
for(index=0; index<names.length; index++){
    console.log("using for loop ",names[index]);
}

names.forEach(function (element){
    console.log("using forEach loop ",element);
})

for (element of names){
    console.log("using for of loop ",element);
}