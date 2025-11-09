import QuizForm from '../components/Admin/QuizForm';
import QuizList from '../components/Admin/QuizList';
import SessionControls from '../components/Admin/SessionControls';

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <QuizForm />
      <QuizList />
      <SessionControls />
    </div>
  );
}
