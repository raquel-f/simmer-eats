import { Typography } from "@/app/_utils/typography";

export default function Page() {
    return (
        <div className="p-6">
            <Typography variant={'h1'} className={'text-green-700 text-center'}>Terms & Conditions</Typography>

            <ol className="my-6 text-green-950 list-decimal list-inside mx-4 font-semibold">
                <li>
                    <span className="font-semibold">Acceptance of Terms</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>By accessing and using this project (hereinafter referred to as "Simmer Eats"), you acknowledge that you have read, and agreed to be bound by the following terms and conditions. If you do not agree with any of these terms or conditions, please refrain from using Simmer Eats.</li>
                        <li>These terms are subject to chenge without prior notice. Simmer Eats reserves the right to modify, suspend, or terminate the project or these terms and conditions at any time. Continued use of Simmer Eats after any such changes constitutes your acceptance of the modified terms and conditions.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Intellectual Property</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>Some content displayed in the project, including but not limited to images, text, and graphics, is owned by Electronic Arts Inc. ("EA") and is protected by intellectual property laws. The content in Simmer Eats is used in accordance with the Fair Use Doctrine.</li>
                        <li>No financial profit is being made or will be made with content owned by EA.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Authentication</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>Simmer Eats may require users to authenticate themselves using an email and password. By providing your email and password, you agree that Simmer Eats may use this information solely for the purpose of user authentication and account management.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Payment and Buyable items</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>Simmer Eats provides a simulated environment where users can perform fake purchases. The payments made within Simmer Eats are for demonstration purposes only and do not involde any real financial transations.</li>
                        <li>The items available for purchase in Simmer Eats are fictional and do not exist in reality.</li>
                        <li>By participating in Simmer Eats, you acknowledge and understand that any purchases made and items received are entirely simulated and hold no real-world value.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">User Responsibilities</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>The user is solely responsible for maintaining the confidentiality and security of their login credentials. The user must not share account information with any third parties.</li>
                        <li>You agree not to use Simmer Eats in any way that violates applicable laws, regulations, or these terms and conditions.</li>
                        <li>You shall not engage in any activities that may disrupt or interfere with the functioning of Simmer Eats or its associated systems.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Limitation of Liability</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>Simmer Eats is provided on an "as is" and "as available" basis. EA does not guarantee the accuracy, reliability, or completeness of any information or content provided in Simmer Eats.</li>
                        <li> EA shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of or in connection with the use of Simmer Eats.</li>
                        <li>EA does not endorse or assume any responsibility for any user-generated content within Simmer Eats.</li>
                    </ol>
                </li>
                
            </ol>

        </div>

    );
}