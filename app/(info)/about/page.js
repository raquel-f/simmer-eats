import Image from "next/image";
import { Typography } from "@/app/_utils/typography";

export default function Page() {
    return (
        <div className="p-6">
            <Typography variant={'h1'} className={'text-green-700 text-center'}>About Simmer Eats</Typography>

            {/* Browse */}
            <div className="my-6 mx-4 flex items-center">
                <Image alt="Sims restaurant table" src={'/sims4/dineOut2.png'} width={350} height={350} className="hidden md:block" />

                <div>
                    <Typography variant={'h2'} className={'text-green-700'}>Browse</Typography>
                    <Typography variant={'h4'} className={'mt-4'}>Simmer Eats has many restaurants to choose from. When you open the app, you can scroll through for inspiration or search for a particular restaurant, cuisine, dietary restriction, or portion size. When you find something you like, click to add it to your order.</Typography>
                </div>
            </div>

            {/* Order */}
            <div className="my-6 mx-4 flex items-center md:mt-4">
                <Image alt="Sims restaurant table" src={'/delivery.png'} width={300} height={300} className="hidden md:block" />

                <div className="md:ml-12">
                    <Typography variant={'h2'} className={'text-green-700'}>Order</Typography>
                    <Typography variant={'h4'} className={'mt-4'}>When you're ready to check out, you'll be redirected to Stripe to conclude your payment. After payment, your order will begin processing.</Typography>
                </div>
            </div>

            {/* Delivery */}
            <div className="my-6 mx-4 flex items-center md:mt-16">
                <Image alt="Sims restaurant table" src={'/categories/eating.png'} width={300} height={300} className="hidden md:block" />

                <div className="md:ml-12">
                    <Typography variant={'h2'} className={'text-green-700'}>Delivery</Typography>
                    <Typography variant={'h4'} className={'mt-4'}>Follow your order in the app. First you'll see the delivery processing and payment acceptance. Then, when your delivery is ready, it will be shipped to you. Finally, you'll receive your favourite products on your doorstep.</Typography>
                </div>
            </div>
        </div>
    );
}