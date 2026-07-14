const apikey = "413d0fd3-56b2-4f27-94d5-b2337cff7794";
const form = document.getElementById("form1");
form.innerHTML += `
<div class="logo2"> <svg _ngcontent-ng-c3167098104="" id="svg2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path _ngcontent-ng-c3167098104="" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline _ngcontent-ng-c3167098104="" points="10 17 15 12 10 7"></polyline><line _ngcontent-ng-c3167098104="" x1="15" y1="12" x2="3" y2="12"></line></svg></div>
<div class="welcome"><p id="wel">Welcome Back</p><p id="sign">Sign in to continue shopping 🛒</p></div>

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
                <a href="" class="forgot-password">Forgot password?</a>
                </div>
                </div>

  <button type="submit">Sign In</button>
</form>

<div class="underline">
    <div class="line"></div>
    <div class="textor"><p class="or">Or</p></div>
    <div class=line></div>
</div>
<div class="come"><p>Don't have an account?</p><span><a href=""class="create" id="create1">Create one now</a></span></div>
</div>
</div>
`
const create1 = document.getElementById("create1");

create1.addEventListener("click", function (e) {
    e.preventDefault();
    form.innerHTML = "";
    form.innerHTML += `
    <div class="logo2"><svg _ngcontent-ng-c1819375656="" id="svg2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path _ngcontent-ng-c1819375656="" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle _ngcontent-ng-c1819375656="" cx="12" cy="7" r="4"></circle></svg></div>
<div class="welcome"><p id="wel">Create your account</p><p id="sign">Join thousands of users in less than a minute 🚀</p></div>

<form>
<div class="names">
    <input type="email" id="name" name="firstname"  placeholder="First Name" required>
  <br>
  <input type="password" id="name" name="lastname"  placeholder="Last Name" required>
  </div>
</div>
<div class="formsforlogin">
  <input type="email" id="email" name="email" autocomplete="username" placeholder="Email address" required>
  <br>
  <input type="password" id="password" name="password" autocomplete="current-password" placeholder="Password" required>
  </div>
<div class="formrow">
             
                </div>

  <button type="submit">Create account</button>
</form>

<div class="come"><p>Already have an account?</p><span><a href=""class="create" id="create2">Sign in</a></span></div>
</div>
</div>
    `
});

