// Función para mostrar el nombre de usuario en la página de bienvenida
function showUsername() {
    // Obtén el elemento donde mostrarás el nombre del usuario
    const nombreUsuarioElement = document.getElementById("nombreUsuario");
  
    // Recupera el nombre de usuario almacenado en sessionStorage
    const username = sessionStorage.getItem("username");
    const usersurname = sessionStorage.getItem("usersurname");
    const nombre = username + " " + usersurname; 
    
    // Verifica si se encontró un nombre de usuario en sessionStorage
    // Establece el contenido del elemento con el nombre del usuario
    nombreUsuarioElement.textContent = nombre;
  }
  
  // Llama a la función showUsername() para mostrar el nombre de usuario
  showUsername();