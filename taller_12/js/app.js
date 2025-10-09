// URL de la API
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Contenedor donde se insertarán las tarjetas
const usersContainer = document.getElementById('users-container');

// Función para obtener los usuarios
async function fetchUsers() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error('Error:', error);
    usersContainer.innerHTML = `<p class="error">No se pudieron cargar los usuarios. Intenta más tarde.</p>`;
  }
}

// Función para mostrar los usuarios en tarjetas
function displayUsers(users) {
  usersContainer.innerHTML = '';

  users.forEach(user => {
    const userCard = document.createElement('article');
    userCard.classList.add('user-card');

    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p class="email">📧 ${user.email}</p>
      <p class="city">🏙️ ${user.address.city}</p>
    `;

    usersContainer.appendChild(userCard);
  });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', fetchUsers);