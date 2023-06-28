import Navbar from "../_components/navbar";

export default function InfoLayout({ children }) {
    return (
        <>
            {/* Navigation */}
            <Navbar />

            <main className="pt-14">
                {/* Content */}
                {children}
            </main>

        </>

    )
}