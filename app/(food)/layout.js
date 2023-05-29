import Navbar from "../_components/navbar";

export default function FoodLayout({ children }) {
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