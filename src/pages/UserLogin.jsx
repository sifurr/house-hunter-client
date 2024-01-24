import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const UserLogin = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';


  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post('/api/v1/user/login', data);      
      toast.success('Login successful');     
     
      navigate(from, { replace: true })
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {        
        setError('password', { type: 'manual', message: 'Invalid email or password' });
        toast.error('Invalid email or password');
      } else {        
        console.log(error.response.data);
        toast.error('An error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 my-20">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center">User Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" {...register('email', { required: 'Email is required' })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" {...register('password', { required: 'Password is required' })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
          </div>
        </form>
        <div className="text-center">
          <p>Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
