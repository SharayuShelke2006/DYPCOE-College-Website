// Signup functionality
let signupForm = document.getElementById("signupForm");

if (signupForm) {
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


// Login functionality
let loginForm = document.getElementById("loginForm");

if (loginForm) {
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
                window.location.href = "index.html";
            }, 1000);
        } else {
            document.getElementById("message").innerText =
                "Invalid email or password!";
        }
    });
}