var oper;
var firstNumber = document.getElementById('n1');
var secondNumber =document.getElementById('n2');
firstNumber.addEventListener("input", function() {
    document.getElementById("print1").innerHTML =firstNumber.value;
     calculate(oper);
  });
  secondNumber.addEventListener("input", function() {
    document.getElementById("print3").innerHTML =secondNumber.value;
     calculate(oper);
  });
  

  val.addEventListener("input",function(){
    document.getElementById("print2").innerHTML=val;
   } )
  
function calculate(val)
    {
                var firstNumber = parseFloat(document.getElementById('n1').value);
                var secondNumber = parseFloat(document.getElementById('n2').value);            
                oper=val;
                if(val == '+')
                {
                    document.getElementById('result').value=
                    firstNumber + secondNumber;
                }
               else if(val == '-')
                {
                    document.getElementById('result').value=
                    firstNumber - secondNumber;
                   if( document.getElementById('result').value<0)
                    {
                        firstNumber="enter value"
                        secondNumber="enter value"
                        document.getElementById('result').value="negative value"
                        alert("negative value")
                    }
                }
                else  if(val == '*')
                {   
                  
                    document.getElementById('result').value=
                    firstNumber * secondNumber;
                }

                else if(val == '/')
                {
                    document.getElementById('result').value=
                    firstNumber / secondNumber;
                }

    document.getElementById("print2").innerHTML=val;

    console.log(firstNumber)
    console.log(val)
    console.log(secondNumber)
     console.log(document.getElementById('result').value)          
    }
    function myFunction(e) {
                  const pattern = /^[0-9]$/;
               
                return pattern.test(e.key )
                            }