function validatePassword(password, retype){
    // check that the password isn't empty
     if (password == "") { 
    
    return false
    } 
    //check that the password has at least 10 characters
    if (password.length <10) {

        return false
    }

   
    //check that both passwords are the same
   if (password != retype) {
        return false
    }

    return true 
}
    
    console.log(validatePassword ("" , ""));
    console.log(validatePassword ("test", ""));
    console.log(validatePassword ("test" , "test"));
    console.log(validatePassword ("testtesttest" , "testtesttest"));
