async function loadDepartments() {
    try {
        let response = await fetch("data/departments.json");

        if (!response.ok) {
            throw new Error("Unable to load JSON file");
        }

        let departments = await response.json();

        let table = document.getElementById("departmentData");

        for (let i = 0; i < departments.length; i++) {
            table.innerHTML += `
                <tr>
                    <td>${departments[i].id}</td>
                    <td>${departments[i].name}</td>
                    <td>${departments[i].description}</td>
                </tr>
            `;
        }

    } catch (error) {
        document.getElementById("error").innerText =
            "Error loading department data.";
    }
}

loadDepartments();