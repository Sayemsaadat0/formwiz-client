import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authcontext/AuthProvider';


const Signup = () => {
    const [signupError, setsignupError] = useState('')

    const { createUser, updateUser } = useContext(AuthContext) 
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignup = data => {
        setsignupError('')
        console.log(data);
        createUser(data.Email, data.password ,)
            .then(result => {
                const user = result.user;
                alert('User Creater Successfully')
                const updateUserInfo = {
                    displayName: data.Name
                }
                updateUser(updateUserInfo)
                    .then(result => { 
                        navigate('/')
                     }).catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err.message);
                setsignupError(err.message)
            })
    }
        ;
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <div className="flex flex-col  px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
                <div className="font-medium self-center text-xl sm:text-3xl uppercase text-gray-800 logo">
                    Signup
                </div>
                <div className="mt-10">
                    <form className='' onSubmit={handleSubmit(handleSignup)}>

                        <div className="form-control w-full my-5 ">
                            <label className='text-secondary'>Enter Email</label>
                            <input
                                className='input my-2 input-bordered w-full'
                                type="email" placeholder="Email" {...register("Email", { required: true })} />
                        </div>


                        <React.Fragment >
                            <label className='text-secondary'>Enter password </label>
                            <input
                                className='input my-2 input-bordered w-full'
                                type="password" placeholder="Password" {...register("password", { required: true })} />
                        </React.Fragment>

                        <button className='btn bg-primary w-full mt-6 text-secondary'>Signup</button>
                    </form>
                    <p>{signupError}</p>
                    <div className=" mt-6">
                        <h5 className=' text-center'>Already Have an account?? <Link to='/signin' className='text-secondary'>Login Here!</Link> </h5>
                    </div>

                    {/* <div className='divider'>or</div>
                    <div>
                        <button className='btn border-none  hover:bg-primary w-full btn-outline text-secondary'><FcGoogle size={30}></FcGoogle> Continue with google</button>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Signup;