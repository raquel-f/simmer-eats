import Branding from "../components/branding";

export default function AuthLayout({ children }) {
    return (
        <section className="h-screen w-screen home-bg">
            <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto h-screen lg:py-0">

                {/* Branding */}
                <div className="flex items-center mb-6 2xl:mb-12" >
                    <Branding />
                </div>

                {/* Content Wrapper */}
                <div className="w-full backdrop-blur-sm rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        
                        {/* Content */}
                        {children}
                    </div>
                </div>

            </div>
        </section>
    )
}
