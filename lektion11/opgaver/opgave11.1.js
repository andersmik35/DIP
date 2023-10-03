// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';

async function getUserData() {
    try {
        const userData = await get(userUrl);
        displayUserData(userData);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

function displayUserData(userData) {
    const userTableBody = document.getElementById('user-table-body');

    userData.forEach(user => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        
        nameCell.textContent = user.name;
        emailCell.textContent = user.email;

        row.appendChild(nameCell);
        row.appendChild(emailCell);

        userTableBody.appendChild(row);
    });
}

async function get(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
}

// Call the function to fetch and display user data
getUserData();
