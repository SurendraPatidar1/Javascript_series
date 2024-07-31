// Immediately Invoked Function Expressions (IIFE)
// jb bhi do IIFE ek saath likhte hai to semicolon lgana padega !
/*
An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.
 It is a common pattern used to create a local scope and avoid polluting the global namespace.

 Any variables or functions declared inside the IIFE are not accessible from the outside,
  thus avoiding any potential name conflicts.
 /*
// function chai(){
//     console.log(`DB Connected`);
// }
// chai(); //  DB Connected

// **** Named IIFE ****
// (function chai(){
//     console.log(`DB Connected`);
// })(); // semicolon is mandatory 

// **** Simple IIFE ****
// ( () => {
//     console.log(`DB Connected Two`);
// })();



( (name) => { // name as a argument le lega 
        console.log(`DB Connected Two ${name}`);
    })("Surya"); // parameter pass
    // DB Connected Two Surya

IIFEs are a powerful tool for creating modular and self-contained code in JavaScript.