// function init(){
        //     let name = "Mozilla";
        //     function displayName(){
        //         console.log(name);
        //     }
        //     displayName();
        // }
        // init();
        function outer(){
            let username = "surya"
            // console.log("OUTER",secret); // not accesible through error
            function inner(){
                let secret = "my123";
                console.log("inner",username);
            }
            function innerTwo(){
                console.log("innerTwo",username);
                // console.log(secret); // not accesible through error
            }
            inner();
            innerTwo();
        }
        outer();
        // console.log(username); not accesible through error

function makeFunc() {
    const name = "Mozilla";
    function displayName(){
        console.log(name);
    }
// function return nhi hota pura scope return hota hai , lexical scope return hota hai.
    return displayName; // funciton refrence passed as a return.
}
const myFunc = makeFunc();
myFunc();