// client component
'use client';

// next & react
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";

// utils
import { loginUser } from "@/app/api";
import { setAuthCookie } from "@/app/api/cookies";
import { Typography } from "@/app/utils/typography";

// authenticate user
async function login(event, errorH, router) {
    // prevent page refresh
    event.preventDefault();

    // get data from form
    const data = {
        email: event.target.email.value,
        password: event.target.password.value,
    }

    try {
        // submit data to API
        const response = await loginUser(data);

        // get response from API
        const status = response.status;
        const result = response.data;

        // user logged in, redirect to food page
        if (status == 200) {
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

export default function SignIn() {

    // login errors
    const [formError, setError] = useState(null);

    // navigation
    const router = useRouter();

    return (
        <>
            {/* Title */}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-green-900 md:text-2xl">
                Welcome Back
            </h1>

            {/* Error Handling */}
            {formError &&
                <div className="bg-red-600 p-2 rounded-md">
                    <Typography variant={'h5'} className={'text-white'}>{formError}</Typography>
                </div>
            }

            {/* Login Form */}
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => login(e, setError, router)}>
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

                {/* Remember User */}
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" value={''} className="w-4 h-4 accent-green-600 bg-gray-50 rounded" />
                        </div>
                        <div className="ml-2 text-sm">
                            <label htmlFor="remember" className="font-medium text-green-950">Remember me</label>
                        </div>
                    </div>
                </div>

                {/* Sign In Button */}
                <button type="submit" className="w-full text-green-950 hover:text-white border-2 border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ease-out duration-300">Sign In</button>

                {/* Sign Up redirect */}
                <p className="text-sm font-light text-green-900 ">
                    Don't have an account yet?
                    <Link href={"/auth/signUp"} className="font-medium text-green-950 hover:underline ml-1">
                        Sign Up
                    </Link>
                </p>
            </form>
        </>
    );
}