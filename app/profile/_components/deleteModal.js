import { useRouter } from "next/navigation";

// API
import { deleteLoggedUser } from "@/app/_api";
import { deleteAuthCookie } from "@/app/_api/cookies";


export default function DeleteModal({ display, setDisplay }) {

    // navigation
    const router = useRouter();

    // delete user account
    const deleteAccount = async () => {
        try {
            // submit request to API
            const response = await deleteLoggedUser();

            // get response from API
            const status = response.status;

            // user was updated, show success
            if (status == 200) {

                // remove jwt from cookies
                deleteAuthCookie('jwt');

                // redirect to home page
                router.push('/');
            }
        } catch (e) { /* console.log(e); */ }
    }

    return (
        <>
            {display &&
                <div id="popup-modal" className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto w-full h-full bg-gray-700 bg-opacity-50" onClick={() => setDisplay(false)}>
                    <div className="relative w-full h-full">
                        <div className="relative bg-white rounded-lg shadow w-full h-max top-1/3 md:-right-1/3 md:w-max  p-4">

                            {/* Close button */}
                            <button type="button" onClick={() => setDisplay(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>

                            <div className="p-6 text-center">
                                <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete your account?</h3>

                                {/* Delete Account Button */}
                                <button type="button" onClick={deleteAccount} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Yes, I'm sure
                                </button>

                                {/* Cancel Button */}
                                <button type="button" onClick={() => setDisplay(false)} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}