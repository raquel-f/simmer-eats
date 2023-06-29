import { Typography } from "@/app/_utils/typography";

export default function Page() {
    return (
        <div className="p-6">
            <Typography variant={'h1'} className={'text-green-700 text-center'}>Add your Restaurant</Typography>
            <Typography variant={'h3'} className={'text-green-900 text-center mt-4'}>Unlock a new revenue stream by connecting with more customers and growing your business on your terms. Partner with us today!</Typography>

            {/* Coming Soon Info */}
            <div className="p-10 mt-60 mb-60 mx-10 flex flex-col items-center border-4 border-green-800 rounded-xl bg-green-100">
                <Typography variant={'h1'} className={'text-green-800 text-center'}>Coming Soon!</Typography>
                <Typography variant={'h3'} className={'text-center mt-4 '}>We are getting everything ready to help your business in the best way possible.</Typography>
            </div>
        </div>
    );
}