function numbersOnly(event) {
    const value = event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));  //check whether given input is number or not 
    if(value === false){
      alert("numbers only allowed")                                                         //alerts when typing chars in input
       return value;
    }
  }
  
  const input = document.querySelector('.calnum');       
  input.onkeypress = numbersOnly;                                       //create onkeypress attribute to input with function numbersonly
  input.onpaste = event => false;                                       //onpaste not allowed pasting text anything in input
  
  
  function clr(){                                                      // clr() for reset the input  while Clicking CLEAR button
    document.querySelector(".calnum").value=""
  }
  
  function clr1(){                                                     //clr1() function for delete number or operator if enter wrongly while clicking DEL button
    document.querySelector(".calnum").value=document.querySelector(".calnum").value.slice(0,-1);
  }
  
  
  function cal(val){                                                  //read the value while clicking respective button like 1,2,3 or +,-,*,/  etc
    document.querySelector(".calnum").value+=val
  }
  
  function equal(){                                                 //performs arthimetic operation after clicking = button in calculator design
    const out=document.querySelector(".calnum").value
    const result=eval(out)
    document.querySelector(".calnum").value=result.toFixed(4)        // decimal points fixed to 4 values
    input.maxlength=20                                               // output will be display with maximum length of 20 only
  }
  
  
  
  
  
  
  
  
