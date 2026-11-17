async function loadFaculty() {
    try {
        let response = await fetch("data/faculty.json");

        if (!response.ok) {
            throw new Error("Unable to load faculty data");
        }

        let faculty = await response.json();

        let table = document.getElementById("facultyData");

        if (faculty.length === 0) {
            table.innerHTML = '<tr><td colspan="4">No faculty records available.</td></tr>';
            return;
        }

        for (let i = 0; i < faculty.length; i++) {
            table.innerHTML += `
                <tr>
                    <td>
                        <img src="${faculty[i].image}" width="70" alt="Faculty photo">
                    </td>
                    <td>${faculty[i].name}</td>
                    <td>${faculty[i].designation}</td>
                    <td>${faculty[i].department}</td>
                </tr>
            `;
        }

    } catch (error) {
        document.getElementById("error").innerText =
            "Error loading faculty data.";
    }
}

loadFaculty();