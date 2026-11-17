function Login() {
    document.getElementById("app").innerHTML = `
        <form id="loginForm">
            <label>Email</label>
            <input type="email" id="loginEmail" required>

            <label>Password</label>
            <input type="password" id="loginPassword" required>

            <button type="submit">Login</button>

            <p id="message"></p>

            <p>New user? <a href="#/signup">Create account</a></p>
        </form>
    `;

    let loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let found = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email &&
                users[i].password === password) {

                found = true;

                localStorage.setItem("currentUser", JSON.stringify(users[i]));

                break;
            }
        }

        if (found) {
            document.getElementById("message").innerText =
                "Login successful! Welcome.";

            setTimeout(function() {
                window.location.hash = "#/home";
            }, 1000);
        } else {
            document.getElementById("message").innerText =
                "Invalid email or password!";
        }
    });
}

function Signup() {
    document.getElementById("app").innerHTML = `
        <form id="signupForm">
            <label>Name</label>
            <input type="text" id="name" required>

            <label>Email</label>
            <input type="email" id="signupEmail" required>

            <label>Password</label>
            <input type="password" id="signupPassword" required>

            <label>Confirm Password</label>
            <input type="password" id="confirmPassword" required>

            <button type="submit">Signup</button>

            <p id="message"></p>

            <p>Already registered? <a href="#/login">Login here</a></p>
        </form>
    `;

    let signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            document.getElementById("message").innerText =
                "Passwords do not match!";
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                document.getElementById("message").innerText =
                    "Email already registered!";
                return;
            }
        }

        let user = {
            name: name,
            email: email,
            password: password
        };

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("message").innerText =
            "Signup successful! You can login now.";

        signupForm.reset();
    });
}
