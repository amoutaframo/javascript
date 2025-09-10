let nointernet_error = new Error(" sorry,there's  no internet")
let internet =false
//try {
    // var firstName
    // console.log(firstName.toUpperCase());
    // console.log("i m after ther uppercase");
    if (internet == false) {
        throw nointernet_error
    }
    else {
        console.log("yes there's internet")
    }
//}
//catch (error){
  //console.log(error.message)  //.stack cest le grand error
//}
//finally {
   // console.log("i always run regardless of error or not")
//}