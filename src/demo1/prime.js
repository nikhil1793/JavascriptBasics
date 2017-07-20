var table = document.getElementById("table");


var print = document.getElementById("print");

print.addEventListener("click",function(e){
    var num=parseInt(table.value);
    if(!isNaN(num)){
      printTable(num);  
    }
    else{
        alert("not a number");
    }
})



function  printTable(number){
    var i,a;
    for(i=1;i<=10;i++){
        a=number*i;
        console.log(a);
    }
}