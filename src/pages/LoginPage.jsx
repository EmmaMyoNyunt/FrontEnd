import { loginWithGoogle } from '../services/auth';

export default function LoginPage() {
  const handleLogin = async () => {
    const user = await loginWithGoogle();
    localStorage.setItem('token', await user.getIdToken());
    window.location.href = '/admin';
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button onClick={handleLogin} className="btn">Login with Google</button>
    </div>
  );
}
