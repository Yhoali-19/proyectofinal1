// Script para manejar el "Me gusta"
document.querySelectorAll('.like-btn').forEach(button => {
    button.addEventListener('click', function() {
      const currentText = button.innerText;
      if (currentText === "Me gusta") {
        button.innerText = "Te gusta";
      } else {
        button.innerText = "Me gusta";
      }
    });
  });
  
  // Script para manejar los comentarios (esto es solo para efecto visual)
  document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', function() {
      alert("¡Comenta sobre esta publicación!");
    });
  });
  