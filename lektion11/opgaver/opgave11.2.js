// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function get(url) {
  const response = await fetch(url);
  if (response.status !== 200) // OK
    throw new Error(response.status);
  return await response.json();
}

async function displayUsers() {
  try {
    const users = await get(userUrl);
    const tbody = document.querySelector('#usersTable tbody');

    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      `;
      row.addEventListener('click', async () => {
        const posts = await get(`${postUrl}${user.id}`);
        displayPosts(posts);
      });
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error(`Error fetching users: ${error.message}`);
  }
}

function displayPosts(posts) {
  const tbody = document.querySelector('#postsTable tbody');
  tbody.innerHTML = '';

  posts.forEach(post => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
    `;
    tbody.appendChild(row);
  });
}

// Initialize the page by displaying users
displayUsers();
