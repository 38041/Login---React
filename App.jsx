import "./App.css";

export default function Login() {
  return (
    <div className="container">
      
      {/* Lado esquerdo */}
      <div className="left">
        <div className="overlay">
          <h1>Bem-vindo</h1>
          <p>Gerencie seus projetos com facilidade e eficiência.</p>
        </div>
      </div>

      {/* Lado direito */}
      <div className="right">
        <div className="login-box">
          <h2>Fazer login</h2>

          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="text" placeholder="Digite seu login..." />
            </div>

            <div className="input-group">
              <label>Senha</label>
              <input type="password" placeholder="Digite sua senha..." />
            </div>

            <button type="submit">Entrar</button>

            <a href="#" className="forgot">
              Esqueci minha senha
            </a>
          </form>
        </div>
      </div>

    </div>
  );
}