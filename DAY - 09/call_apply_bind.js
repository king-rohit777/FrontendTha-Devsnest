let name={
  firstName:"Rohit",
  lastName:"Jaiswal",
}

let name2={
  firstName:"Tanaya",
  lastName:"Jaiswal",
}

printFullName = function(hometown,state){
  console.log(this.firstName+" "+this.lastName+" "+hometown
  +" "+state);
}

//call
//first parameter refers to this , rest are function parameters
printFullName.call(name,"Jamshedpur","Jharkhand");
printFullName.call(name2,"Jamshedpur too","Jharkhand too");

//apply takes parameters as a list 
printFullName.call(name,["Jamshedpur","Jharkhand"]);

//bind creates a copy of the function, computes and stores the result which can be called
//anytime and anywere in the function
let getname=printFullName.bind(name2,"Jamshedpur","Jharkhand");
//console.log(getname)
getname();

