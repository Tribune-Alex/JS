const apikey = "413d0fd3-56b2-4f27-94d5-b2337cff7794";
const form = document.getElementById("form1");

showLogin();

function showLogin() {

    form.innerHTML = `
<div class="logo2"> <svg _ngcontent-ng-c3167098104="" id="svg2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path _ngcontent-ng-c3167098104="" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline _ngcontent-ng-c3167098104="" points="10 17 15 12 10 7"></polyline><line _ngcontent-ng-c3167098104="" x1="15" y1="12" x2="3" y2="12"></line></svg></div>

<div class="welcome">
<p id="wel">Welcome Back</p>
<p id="sign">Sign in to continue shopping 🛒</p>
</div>

<form>
<div class="formsforlogin">
<input type="email" id="email" name="email" autocomplete="username" placeholder="Email address" required>
<br>
<input type="password" id="password" name="password" autocomplete="current-password" placeholder="Password" required>
</div>

<div class="formrow">
<div>
<input type="radio" id="remember" name="remember" value="forever">
<label for="remember">Remember me</label>
</div>

<div>
<a href="" class="forgot-password" id="resetpas">Forgot password?</a>
</div>
</div>

<button type="button" onclick="login()">Sign In</button>
</form>

<div class="underline">
<div class="line"></div>
<div class="textor"><p class="or">Or</p></div>
<div class="line"></div>
</div>

<div class="come">
<p>Don't have an account?</p>
<span><a href="" class="create" id="create1">Create one now</a></span>
</div>
`;

    document.getElementById("create1").addEventListener("click", showRegister);
    document.getElementById("resetpas").addEventListener("click", showResetPassword);
}

function showRegister(e) {

    e.preventDefault();

    form.innerHTML = `
<div class="logo2"><svg _ngcontent-ng-c1819375656="" id="svg2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path _ngcontent-ng-c1819375656="" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle _ngcontent-ng-c1819375656="" cx="12" cy="7" r="4"></circle></svg></div>

<div class="welcome">
<p id="wel">Create your account</p>
<p id="sign">Join thousands of users in less than a minute 🚀</p>
</div>

<form>

<div class="names">
<input type="firstname" id="name" name="firstname" placeholder="First Name" required>
<br>
<input type="lastname" id="lastname" name="lastname" placeholder="Last Name" required>
</div>

<div class="formsforlogin">
<input type="email" id="email" name="email" autocomplete="username" placeholder="Email address" required>
<br>
<input type="password" id="password" name="password" autocomplete="current-password" placeholder="Password" required>
</div>

<button type="button" onclick="signUp()">Create account</button>

</form>

<div class="come">
<p>Already have an account?</p>
<span><a href="" class="create" id="create2">Sign in</a></span>
</div>
`;

    document.getElementById("create2").addEventListener("click", function (e) {
        e.preventDefault();
        showLogin();
    });
}

function showResetPassword(e) {

    e.preventDefault();

    form.innerHTML = `
<div class="logo2"><svg _ngcontent-ng-c445333715="" id="svg2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect _ngcontent-ng-c445333715="" x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path _ngcontent-ng-c445333715="" d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>

<div class="welcome">
<p id="wel">Forgot Password?</p>
<p id="sign">Enter your email and we'll send you a reset link</p>
</div>

<form>

<div class="formsforlogin">
<input type="email" id="email" name="email" autocomplete="username" placeholder="Email address" required>
</div>

<button type="button" onclick="resetPas()">Send Reset Link</button>

</form>

<div class="come">
<span><a href="" class="create" id="create2">Back To Login</a></span>
</div>
`;

    document.getElementById("create2").addEventListener("click", function (e) {
        e.preventDefault();
        showLogin();
    });
}

function confirmPass() {
    
    form.innerHTML = `
<div class="logo2"><svg _ngcontent-ng-c2668363126="" id="svg2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path _ngcontent-ng-c2668363126="" d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg></div>

<div class="welcome">
<p id="wel">Reset Password</p>
<p id="sign">Enter your new password below 🔐</p>
</div>

<form>

<div class="formsforlogin">
<input type="password" id="password" name="password" autocomplete="current-password" placeholder="New Password" required>
<br>
<input type="password" id="password2" name="password" autocomplete="current-password" placeholder="Confirm New Password" required>
</div>

<button type="button" onclick="confirmedPassword()">Reset Password</button>

</form>

<div class="come">
<span><a href="" class="create" id="create2">Sign In</a></span>
</div>
`;

    document.getElementById("create2").addEventListener("click", function (e) {
        e.preventDefault();
        showLogin();
    });
}

let accessToken = "";

async function signUp() {

    const userData = {
        firstName: document.getElementById("name").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    console.log(userData);

    try {

        const res = await fetch("https://shopapi.stepacademy.ge/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apikey
            },
            body: JSON.stringify(userData)
        });

        const data = await res.json();

        console.log(res.status);
        console.log(data);

        if (!res.ok) {
            alert(data.message || "Registration failed");
            return;
        }

        alert("Registration successful!");

        form.innerHTML = `
<div class="logo2">
<svg id="svg2" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
viewBox="0 0 24 24" fill="none" stroke="currentColor"
stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>

<div class="welcome">
<p id="wel">Verify your Email</p>
<p id="sign">Enter the verification code sent to your email</p>
</div>

<div class="formsforlogin">
<input
type="text"
id="code"
placeholder="Enter Verify Code"
required>
</div>

<button type="button" id="verifyBtn">Verify</button>

<div class="come">
<p>Didn't receive the code?</p>
<span><a href="" class="create" id="backLogin">Back To Login</a></span>
</div>
`;

        document.getElementById("verifyBtn").addEventListener("click", verify);

        document.getElementById("backLogin").addEventListener("click", function (e) {
            e.preventDefault();
            showLogin();
        });

        async function verify() {

            const verifyData = {
                email: userData.email,
                code: document.getElementById("code").value
            };

            try {

                const verRes = await fetch(
                    "https://shopapi.stepacademy.ge/api/auth/verify-email",
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            "x-api-key": apikey
                        },
                        body: JSON.stringify(verifyData)
                    }
                );

                const verData = await verRes.json();

                console.log(verRes.status);
                console.log(verData);

                if (!verRes.ok) {
                    alert(verData.message || "Verification failed");
                    return;
                }

                alert("Email verified successfully!");


                showLogin();

            } catch (err) {
                console.error(err);
            }

        }

    } catch (err) {
        console.error(err);
    }

}


async function login() {

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    console.log(loginData);

    try {

        const res = await fetch("https://shopapi.stepacademy.ge/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apikey
            },
            body: JSON.stringify(loginData)
        });

        const data = await res.json();

        console.log(res.status);
        console.log(data);

        if (!res.ok) {
            alert(data.message || "Login failed");
            return;
        }


        accessToken = data.data.accessToken;
        console.log(accessToken);

        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);
        


        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
        }

        alert("Login successful!");


        window.location.href = "/ShopProject/index.html";

    } catch (err) {
        console.error(err);
    }

}




async function resetPas() {

    const email = document.getElementById("email").value;

    try {

        const res = await fetch(
            `https://shopapi.stepacademy.ge/api/auth/forget-password/${email}`,
            {
                method: "POST",
                headers: {
                    "accept": "*/*",
                    "x-api-key": apikey,
                    "Authorization": `Bearer ${apikey}`
                }
            }
        );

        console.log(res.status);

        const text = await res.text();
        console.log(text);


        if (res.ok) {
            alert("Reset link sent to your email!");
            confirmPass();
        } else {
            alert("Something went wrong");
        }
        

    } catch (err) {
        console.error(err);
    }
}



async function confirmedPassword(){

    const pass=document.getElementById("password").value;
    const pass2=document.getElementById("password2").value;


    if(pass !== pass2){
        alert("Passwords do not match");
        return;
    }


    const passwordData = {
        token: resetToken,
        password: pass
    };


    console.log(passwordData);


    const res = await fetch(
        "https://shopapi.stepacademy.ge/api/auth/reset-password",
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "x-api-key":apikey,
                "Authorization":`Bearer ${apikey}`
            },
            body:JSON.stringify(passwordData)
        }
    );


    const data = await res.json();

    console.log(data);


    if(res.ok){
        alert("Password changed!");
        showLogin();
    }

}