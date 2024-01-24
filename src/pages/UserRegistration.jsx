import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const UserRegistration = () => {
  const { register, handleSubmit, setError, reset, formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post('/api/v1/user/register', data);
      console.log("SUCCESS MSG: ",response.data); 
      if(response.data.message)
      {
        toast.success(response.data.message)
        reset();
      }
    } catch (error) {
      if (error.response.status === 400) {      
        Object.entries(error.response.data).forEach(([field, errorMessage]) => {
          setError(field, { type: 'manual', message: errorMessage });
        });
      } else {
        console.log(error.response.data); 
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 my-20">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center">User Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" {...register('fullName', { required: 'Full Name is required' })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select {...register('role', { required: 'Role is required' })} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
              <option value="">Select Role</option>
              <option value="house owner">House Owner</option>
              <option value="house renter">House Renter</option>
            </select>
            {errors.role && <p className="text-red-500">{errors.role.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" {...register('phoneNumber', { required: 'Phone Number is required', pattern: /^(\+8801\d{9}|\+8801\d{8})$/ })} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>
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
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
          </div>
        </form>
        <div className="text-center">
          <p>Already registered? <Link to="/login" className="text-blue-500">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;


                                                                            
     
