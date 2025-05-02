(function () {
    emailjs.init("cbPnUy-hN-RLRgm28"); // Id del usuario en gmailjs
  })();
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Obtener valores
      const nombre = form.nombre.value.trim();
      const correo = form.correo.value.trim();
      const telefono = form.telefono.value.trim();
      const asunto = form.asunto.value.trim();
      const mensaje = form.mensaje.value.trim();
  
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Validaciones
      if (!nombre || !correo || !telefono || !asunto || !mensaje) {
        alert("⚠️ Por favor, completa todos los campos.");
        return;
      }
      if (!emailValido.test(correo)) {
        alert("📧 El correo electrónico no es válido.");
        return;
      }
      if (telefono.length < 7 || isNaN(telefono)) {
        alert("📱 Número de teléfono inválido.");
        return;
      }
      // Enviar el formulario usando EmailJS
      emailjs.sendForm("service_ldy684o", "template_npn7yzq", form).then(  //id del servcio y id del template de gamailjs
        function () {
          alert("✅ Mensaje enviado correctamente.");
          form.reset();
        },
        function (error) {
          alert("❌ Error al enviar el mensaje: " + error.text);
        }
      );
    });
  });
  