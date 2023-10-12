document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("nombre").value;
  const usersurname = document.getElementById("apellido").value;
  const password = document.getElementById("contrasena").value;

  if (username === "carolina" && usersurname === "rodriguez" && password === "123") {
    // Redirigir a la página de bienvenida de la alumna
    window.location.href = "bienvenida_alumno.html";
  
    // Además, puedes almacenar el nombre del usuario en una variable de sesión o local storage
    sessionStorage.setItem("usersurname", usersurname);
    sessionStorage.setItem("username", username);

  } else if (username === "cristian" && usersurname === "juarez" && password === "123") {
    // Redirigir a la página de bienvenida de la alumna
    window.location.href = "bienvenida_alumno.html";
  
    // Además, puedes almacenar el nombre del usuario en una variable de sesión o local storage
    sessionStorage.setItem("usersurname", usersurname);
    sessionStorage.setItem("username", username);

  }
    else if (username === "pablo" && usersurname === "marcelli " && password === "123") {
    // Redirigir a la página de bienvenida del profesor
    window.location.href = "bienvenida_profesor.html";
  
    // También puedes almacenar el nombre del usuario en una variable de sesión o local storage
    sessionStorage.setItem("usersurname", usersurname);
    sessionStorage.setItem("username", username);
  } else {
    // Usuario incorrecto
    alert("Usuario o contraseña incorrectos");
  }
});

