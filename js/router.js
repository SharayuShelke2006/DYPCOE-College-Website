const routes = {
    "/home": Home,
    "/departments": Departments,
    "/faculty": Faculty,
    "/login": Login,
    "/signup": Signup
};

function renderPage() {
    let path = location.hash.slice(1) || "/home";

    let page = routes[path];

    if (page) {
        page();
    } else {
        document.getElementById("app").innerHTML =
            "<h2>404 - Page Not Found</h2>";
    }
}

window.addEventListener("load", function() {
    renderPage();
});

window.addEventListener("hashchange", function() {
    renderPage();
});
