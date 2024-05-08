import { ChangeEvent, FormEvent, useState } from "react";
import "./login.scss";

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    if (isSubmitted) {
      validateEmail(value);
    }
  };

  const validateEmail = (value: string) => {
    if (value.trim() !== "admin@gmail.com") {
      setEmailError("Error: usuario incorrecto");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    validateEmail(email);
    if (!emailError) {
      const isAuthenticated = authenticateUser(email, password);
      if (isAuthenticated) {
        onLogin();
      }
    }
  };

  const authenticateUser = (email: string, password: string): boolean => {
    // Credenciales predefinidas
    const adminEmail = "admin@gmail.com".trim();
    const adminPassword = "admin";

    // Comparar las credenciales recibidas con las credenciales predefinidas
    if (email.trim() === adminEmail && password === adminPassword) {
      return true; // Credenciales válidas
    } else {
      return false; // Credenciales inválidas
    }
  };

  return (
    <>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="login-container">
        <div className="container-section">
          <div className="container-one">
            <h1>Welcom Back!</h1>
            <span>Please log in to your account.</span>
            <div className="container-form">
              <form className="formulario" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="">Email:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <span className="error">{emailError}</span>}
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    placeholder="★★★★★★"
                    id="password"
                    name="input"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="ingresar">
                  <button type="submit">Sing in</button>
                </div>
              </form>
            </div>
          </div>
          <div className="container-two">
            <div className="img-container">
              <img src="./homeImage.png" alt="" />
              <div className="sombra"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
