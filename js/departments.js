async function Departments() {
    document.getElementById("app").innerHTML = `
        <h2>Our Departments</h2>
        <p id="error"></p>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Department</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody id="departmentData"></tbody>
        </table>
    `;

    try {
        let response = await fetch("data/departments.json");

        if (!response.ok) {
            throw new Error("Data not found");
        }

        let data = await response.json();

        let table = document.getElementById("departmentData");

        data.forEach(function(dept) {
            table.innerHTML += `
                <tr>
                    <td>${dept.id}</td>
                    <td>${dept.name}</td>
                    <td>${dept.description}</td>
                </tr>
            `;
        });

    } catch (error) {
        document.getElementById("error").innerText =
            "Unable to load departments.";
    }
}
