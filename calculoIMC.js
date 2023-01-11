let peso = 84
let alt = 1.68
let imc = peso / alt ** 2

if(imc < 18.5)
    console.log("Magreza");
   else if(imc < 25)
        console.log("Normal");
        else if(imc < 30)
            console.log("Sobrepeso");
            else if(imc < 40)
                console.log("Obesidade");
else(console.log("Obesidade Grave"));
                    
  