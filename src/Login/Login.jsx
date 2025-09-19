// src/pages/Login.jsx
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ⚠️ Login simulado (solo para MVP/UX)
    const mockEmail = "admin@cafesig.com";
    const mockPassword = "123456";

    const emailCorrecto = email === mockEmail;
    const passwordCorrecto = password === mockPassword;

    setErrorEmail(!emailCorrecto);
    setErrorPassword(emailCorrecto && !passwordCorrecto);

    if (emailCorrecto && passwordCorrecto) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Panel izquierdo con imagen y texto */}
      <div className="w-1/2 bg-[url('https://images.unsplash.com/photo-1511920170033-f8396924c348')] bg-cover bg-center flex flex-col justify-center items-center text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a CaféSIG</h1>
        <p className="text-lg text-center max-w-md">
          Sistema Integral de Gestión y Control de Producción de Café Gourmet. Inicia sesión para acceder al sistema de producción.
        </p>
      </div>

      {/* Panel derecho con login */}
      <div className="w-1/2 bg-white flex justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Iniciar Sesión</h2>

          <label className="block mb-1">Correo:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border rounded mb-2 ${errorEmail ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errorEmail && (
            <p className="text-red-500 text-sm mb-2">Correo incorrecto</p>
          )}

          <label className="block mb-1">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 border rounded mb-2 ${errorPassword ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errorPassword && (
            <p className="text-red-500 text-sm mb-4">Contraseña incorrecta</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white p-2 rounded transition"
          >
            Entrar
          </button>

          <p className="text-center text-gray-500 text-sm mt-4">
            Acceso solo para personal autorizado
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
