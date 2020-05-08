
var fruits = ['Mangue', 'Raisin', 'Figue','Kiwi'];

document.getElementById("demo").innerHTML= fruits;

function valider(){
    var f=document.getElementById("fruit").value;
    x=false;

    for (let i = 0; i < fruits.length; i++) 
    {  
            if((f.toUpperCase())==(fruits[i].toUpperCase()))
            {
               fruits.splice(i,1);
                  x=true;
             }

    }
    if(x==true) {
        alert("ok!");
    }
    else {
        alert("Indisponible");
    }
    console.log(fruits);
    document.getElementById("demo").innerHTML= fruits;

    }
    