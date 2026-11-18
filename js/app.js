document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();

function Home() {
    document.getElementById("app").innerHTML = `
        <h2>Welcome to DYPCOE</h2>

        <img class="home-image"
        src="../college.png"
        alt="College building">

        <p>
            Welcome to Dr. D. Y. Patil College of Engineering,
            Akurdi, Pune.
        </p>

        <h3>Explore Our College</h3>
        <p>View our departments and faculty information.</p>
    `;
}
