      function calculate(op){
        const num1=parseFloat(document.getElementById("num1").value);
        const num2=parseFloat(document.getElementById("num2").value);
        let res;
        if(isNaN(num1)||isNaN(num2)){
          res=" enter both number";
          
        }
          else{
          switch (op) {
          case '+': res = num1 + num2; break;
          case '-': res = num1 - num2; break;
          case '*': res = num1 * num2; break;
          case '/': res = num2 !== 0 ? (num1 / num2) : "Can't divide by zero"; break;
          case '%': res = num1 % num2; break;
          }
          
          
        }
        document.getElementById("Result").innerText="Result: "+ res;
          
        }
        