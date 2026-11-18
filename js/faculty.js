async function Faculty() {
    document.getElementById("app").innerHTML = `
        <h2>Our Faculty</h2>
        <p id="error"></p>


        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody id="facultyData"></tbody>
        </table>
    `;

    try {
        let response = await fetch("data/faculty.json");

        if (!response.ok) {
            throw new Error("Data not found");
        }

        let data = await response.json();

        displayFaculty(data);

        let searchBox = document.getElementById("searchFaculty");

        searchBox.addEventListener("input", function() {
            let searchValue = searchBox.value.toLowerCase();

            let filtered = data.filter(function(person) {
                return person.name.toLowerCase().includes(searchValue);
            });

            displayFaculty(filtered);
        });

    } catch (error) {
        document.getElementById("error").innerText =
            "Unable to load faculty.";
    }
}

function displayFaculty(list) {
    let table = document.getElementById("facultyData");

    table.innerHTML = "";

    list.forEach(function(person) {
        table.innerHTML += `
            <tr>
                <td><img src="${person.image}" width="70" alt="Faculty photo"></td>
                <td>${person.name}</td>
                <td>${person.designation}</td>
                <td>${person.department}</td>
            </tr>
        `;
    });
}
