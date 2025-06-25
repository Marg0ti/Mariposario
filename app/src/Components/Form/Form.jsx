import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validarCampo = (nombre, valor) => {
    let nuevosErrores = { ...errors };

    switch (nombre) {
      case 'email':
        if (!valor) {
          nuevosErrores.email = "El campo email es obligatorio";
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valor)) {
          nuevosErrores.email = "El email no es válido";
        } else {
          delete nuevosErrores.email;
        }
        break;

      case 'name':
        if (!valor) {
          nuevosErrores.name = "El campo nombre es obligatorio";
        } else if (valor.length < 3) {
          nuevosErrores.name = "El nombre debe tener al menos 3 caracteres";
        } else {
          delete nuevosErrores.name;
        }
        break;

      case 'subject':
        if (!valor) {
          nuevosErrores.subject = "El campo asunto es obligatorio";
        } else if (valor.length < 5) {
          nuevosErrores.subject = "El asunto debe tener al menos 5 caracteres";
        } else {
          delete nuevosErrores.subject;
        }
        break;

      case 'message':
        if (!valor) {
          nuevosErrores.message = "El campo mensaje es obligatorio";
        } else if (valor.length < 10) {
          nuevosErrores.message = "El mensaje debe tener al menos 10 caracteres";
        } else {
          delete nuevosErrores.message;
        }
        break;

      default:
        break;
    }

    setErrors(nuevosErrores);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validarCampo(name, value);
  };

  // 🔹 Función para enviar el formulario al backend
  const enviarFormulario = async () => {
    try {
      const response = await fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Mensaje enviado con éxito");
        // Resetear el formulario si quieres
        setFormData({
          email: '',
          name: '',
          subject: '',
          message: ''
        });
      } else {
        alert("Hubo un error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en la red o servidor");
    }
  };

  const contactForm = (e) => {
    e.preventDefault();

    // Validar todos los campos
    const nuevosErrores = {};
    Object.keys(formData).forEach((campo) => {
      validarCampo(campo, formData[campo]);
      if (!formData[campo]) {
        nuevosErrores[campo] = 'Este campo es obligatorio';
      }
    });

    // Si hay errores, no enviar
    if (Object.keys(errors).length > 0) return;

    // 🔹 Llamar a enviarFormulario()
    enviarFormulario();
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6 text-h2" >¿En qué podemos ayudarte?</h2>

      <form onSubmit={contactForm} className="max-w-xl mx-auto p-6 bg-bgForm shadow-md rounded-sm space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-bgInputs bg-bgInputs rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-inputFocus"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Casimiro"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full border border-bgInputs bg-bgInputs rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-inputFocus"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Asunto:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Asunto"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 w-full border border-bgInputs bg-bgInputs rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-inputFocus"
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje:</label>
          <textarea
            name="message"
            id="message"
            placeholder="Escribe tu mensaje aquí"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full border border-bgInputs bg-bgInputs rounded-sm p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-inputFocus"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-buttonBackground text-buttonText border-1 border-solid border-buttonBorder py-2 px-4 rounded-sm hover:bg-buttonBackgroundHover hover:text-buttonTextHover hover:border-buttonBorderHover transition duration-300"
        >
          Enviar
        </button>
      </form>

    </>
  );
}
