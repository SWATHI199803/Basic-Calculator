function numbersOnly(event) {
    const value = event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));
    if(value === false){
      alert("numbers only allowed")
       return value;
    }
  }
  
  const input = document.querySelector('.calnum');
  input.onkeypress = numbersOnly;
  input.onpaste = event => false;
  
  
  function clr(){
    document.querySelector(".calnum").value=""
  }
  
  function clr1(){
    document.querySelector(".calnum").value=document.querySelector(".calnum").value.slice(0,-1);
  }
  
  
  function cal(val){
    document.querySelector(".calnum").value+=val
  }
  
  function equal(){
    const out=document.querySelector(".calnum").value
    const result=eval(out)
    document.querySelector(".calnum").value=result.toFixed(4)
    input.maxlength=20
  }
  
  
  
  
  
  
  
  