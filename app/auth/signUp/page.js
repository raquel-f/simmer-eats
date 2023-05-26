// client component
'use client';

// next & react
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";

// utils
import { registerUser } from "@/app/api";
import { setAuthCookie } from "@/app/api/cookies";
import { Typography } from "@/app/utils/typography";


// create a new user account
async function createAccount(event, errorH, router) {
    // prevent page refresh
    event.preventDefault();

    // get data from form
    const data = {
        firstName: event.target.f_name.value,
        lastName: event.target.l_name.value,
        email: event.target.email.value,
        password: event.target.password.value,
        confirmPassword: event.target.c_password.value,
        image: "/android-chrome-192x192.png" // default image
    }

    try {
        // submit data to API
        const response = await registerUser(data);

        // get response from API
        const status = response.status;
        const result = response.data;

        // user logged in, redirect to food page
        if (status == 201) {
            // set token cookie
            setAuthCookie('jwt', result.token);

            // clear form and errors
            event.target.reset();
            errorH(null);

            // redirect to food page
            router.push('/food');

        }
    } catch (e) {
        // show error to user
        console.log(e);
        errorH(e.response.data.message);
    }
}

export default function SignUp() {

    // create account errors
    const [formError, setError] = useState(null);

    // navigation
    const router = useRouter();

    return (
        <>
            {/* Title */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-green-900 md:text-2xl">
                Create an Account
            </h1>

            {/* Error Handling */}
            {formError &&
                <div className="bg-red-600 p-2 rounded-md">
                    <Typography variant={'h5'} className={'text-white'}>{formError}</Typography>
                </div>
            }

            {/* Sign Up Form */}
            <form className="space-y-3 md:space-y-5" onSubmit={(e) => createAccount(e, setError, router)}>
                <div className="flex items-center justify-between">
                    {/* First Name Input */}
                    <div>
                        <label htmlFor="f_name" className="block mb-2 text-sm font-medium text-green-950">First Name</label>
                        <input type="text" name="f_name" id="f_name" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-11/12 md:w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Eliza" required />
                    </div>

                    {/* Last Name Input */}
                    <div>
                        <label htmlFor="l_name" className="block mb-2 text-sm font-medium text-green-950">Last Name</label>
                        <input type="text" name="l_name" id="l_name" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-11/12 md:w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Pancakes" required />
                    </div>
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-950">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="name@email.com" required />
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-green-950">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-600" required />
                </div>

                {/* Confirm Password Input */}
                <div>
                    <label htmlFor="c_password" className="block mb-2 text-sm font-medium text-green-950">Confirm Password</label>
                    <input type="password" name="c_password" id="c_password" placeholder="••••••••" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-600" required />
                </div>

                {/* Sign Up Button */}
                <button type="submit" className="w-full text-green-950 hover:text-white border-2 border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ease-out duration-300">Sign Up</button>

                {/* Sign In redirect */}
                <p className="text-sm font-light text-green-900 ">
                    Already have an account?
                    <Link href={"/auth/signIn"} className="font-medium text-green-950 hover:underline ml-1">
                        Sign In
                    </Link>
                </p>
            </form>
        </>
    );
}