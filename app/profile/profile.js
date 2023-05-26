// Client Component - needed due to cookies
'use client';

import Image from "next/image";
import { Typography } from "../utils/typography";
import { useEffect, useState } from "react";
import { getLoggedUser, updateLoggedUser } from "../api";
import { getAuthCookie } from "../api/cookies";

export default function Profile() {

    // form states
    const [formError, setError] = useState(null);
    const [formSuccess, setSuccess] = useState(null);
    const [name, setName] = useState('');
    const [password, setPassword] = useState(null);
    const [confPassword, setConfPassword] = useState(null);
    const [image, setImage] = useState('/android-chrome-192x192.png');

    // authenticated user's information
    const [user, setUser] = useState(null);

    // get authenticated user
    useEffect(() => {
        // if there is no cookie, return
        if (!getAuthCookie('jwt')) return;

        getLoggedUser()
            .then((res) => {
                console.log(res.data);
                // user information
                setUser(res.data);

                // form information
                setName(res.data.name);
                setImage(res.data.image);
            })
            .catch((error) => { console.log(error); setUser(null) });
    }, []);

    // update user information
    const updateUser = async (event) => {
        // prevent page refresh
        event.preventDefault();

        // get data from form
        const data = {
            name: name,
            image: image
        }
        // add optional data change
        if (password && confPassword) {
            data.password = password;
            data.confirmPassword = confPassword;
        }
        // if one password field is not filled in, show error
        else if ((password && !confPassword) || (!password && confPassword)) {
            setError('Both password fields are mandatory for password change.');
            return;
        }

        try {
            // submit data to API
            const response = await updateLoggedUser(data);

            // get response from API
            const status = response.status;

            // user was updated, show success
            if (status == 200) {
                // clear form and errors
                event.target.reset();
                setError(null);

                // show success message
                setSuccess('User information updated.')

            }
        } catch (e) {
            // show error to user
            console.log(e);
            setError(e.response.data.message);
        }
    }


    return (
        <div className="flex flex-col items-center justify-around pt-4 mb-4 lg:flex-row lg:justify-around lg:items-start">

            {/* Possible profile images available */}
            <div className="mb-10 lg:pl-6 lg:mb-0">
                <Typography variant={'h2'} className={'mb-6 text-green-900'}>Profile Images</Typography>
                <div className="grid grid-cols-3 gap-6 place-items-center">
                    <Image src={'/android-chrome-192x192.png'} height={100} width={100} alt="Plumbob" className="rounded-full border-4 hover:border-green-800 hover:cursor-pointer col-span-3"
                        onClick={() => setImage('/android-chrome-192x192.png')} />
                    <Image src={'/users/Eliza.png'} height={100} width={100} alt="Eliza" className="rounded-full border-4 hover:border-green-800 hover:cursor-pointer"
                        onClick={() => setImage('/users/Eliza.png')} />
                    <Image src={'/users/Bob.png'} height={100} width={100} alt="Bob" className="rounded-full border-4 hover:border-green-800 hover:cursor-pointer"
                        onClick={() => setImage('/users/Bob.png')} />
                    <Image src={'/users/Nalani.png'} height={100} width={100} alt="Nalani" className="rounded-full border-4 hover:border-green-800 hover:cursor-pointer"
                        onClick={() => setImage('/users/Nalani.png')} />
                    <Image src={'/users/Don.png'} height={100} width={100} alt="Don" className="rounded-full border-4 hover:border-green-800 hover:cursor-pointer"
                        onClick={() => setImage('/users/Don.png')} />
                    <Image src={'/users/Nancy.png'} height={100} width={100} alt="Nancy" className="rounded-full border-4 hover:border-green-800 hover:cursor-pointer"
                        onClick={() => setImage('/users/Nancy.png')} />
                    <Image src={'/users/Mortimer.png'} height={100} width={100} alt="Mortimer" className="rounded-full border-4 hover:border-green-800 hover:cursor-pointer"
                        onClick={() => setImage('/users/Mortimer.png')} />
                </div>
            </div>

            {/* Profile information */}
            <div className="w-full md:w-3/4 lg:pr-6 lg:w-2/6">

                {/* Title and Profile image */}
                <div className="flex items-center justify-between mb-8 lg:items-start">
                    <Typography variant={'h2'} className={'text-green-900'}>User Information</Typography>
                    <Image src={image} height={100} width={100} alt="Profile image" className="rounded-full border-4 hover:border-green-800 hover:cursor-pointer" />
                </div>


                {/* Error Handling */}
                {formError &&
                    <div className="bg-red-600 p-2 rounded-md mb-4">
                        <Typography variant={'h5'} className={'text-white'}>{formError}</Typography>
                    </div>
                }

                {/* Success Handling */}
                {formSuccess &&
                    <div className="bg-green-700 p-2 rounded-md mb-4">
                        <Typography variant={'h5'} className={'text-white'}>{formSuccess}</Typography>
                    </div>
                }

                {/* Update profile Form */}
                <form className="space-y-3 md:space-y-5" onSubmit={(e) => { updateUser(e) }}>

                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-green-950">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-2 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Eliza" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-green-950">New Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-2 focus:outline-none focus:ring-2 focus:ring-green-600" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                        <label htmlFor="c_password" className="block mb-2 text-sm font-medium text-green-950">Confirm Password</label>
                        <input type="password" name="c_password" id="c_password" placeholder="••••••••" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-2 focus:outline-none focus:ring-2 focus:ring-green-600" onChange={(e) => setConfPassword(e.target.value)} />
                    </div>

                    {/* Update Button */}
                    <button type="submit" className="w-full text-green-950 hover:text-white border-2 border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ease-out duration-300">Update Information</button>
                </form>
            </div >

        </div >
    );
}