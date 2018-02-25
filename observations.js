var myName = 'Kat'

function sayName() {
  var secret = 'watchandcode';
  console.log(myName);
}

//call function//
sayName(); // 'Kat'
console.log(secret); // ERROR

// If youre inside of a function, you can look out and see data,
// but if you're outside, you can't look in
