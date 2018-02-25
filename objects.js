//What is an object?

//We use objects to group related data and functions together to describe a thing

// In english, when talking about my laptop(object) it would
// look like this:

// operatingSystem mac
// screenSize 15 inches
// purchaseYear 2011

//When translating this in javascript it will look like

var myComputer = {
  operatingSystem: 'mac', //property: value
  screenSize: '15 inches', // property: value
  purchaseYear: '2011'     // property: value
};

myComputer //will print object

//to define specific property of object, use .propertyname
myComputer.operatingSystem //will print 'mac'
