import { Typography } from "@/app/_utils/typography";

export default function Page() {
    return (
        <div className="p-6">
            <Typography variant={'h1'} className={'text-green-700 text-center'}>Privacy Policy</Typography>

            <ol className="my-6 text-green-950 list-decimal list-inside mx-4 font-semibold">
                <li>
                    <span className="font-semibold">Introduction</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>This privacy policy (hereinafter referred to as "the policy") outlines how personal information is collected, used, and disclosed in relation to your use of this project (hereinafter referred to as "the project"). The project is designed to simulate a food delivery service and is for demonstration purposes only.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Information Collection</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>Personal Information: The project may collect personal information, such as your name, email address, and contact details, when you provide them voluntarily for authentication purposes or other interactions within the project.</li>
                        <li>Usage Data: The project may automatically collect certain non-personal information, such as your IP address, browser type, device information, and usage patterns, for analytical purposes and to improve the project's functionality.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Use of Information</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>Personal Information: The personal information collected may be used for user authentication, account management, and to provide you with access to the project's features and functionality.</li>
                        <li>Usage Data: The usage data collected may be used to analyze trends, track user interactions, and improve the performance and user experience of the project.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Information Sharing</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>Third-Party Service Providers: The project may utilize third-party service providers to perform functions on our behalf, such as hosting, data analysis, and customer support. These service providers may have access to your personal information only to the extent necessary to perform their functions and are obligated to maintain its confidentiality.</li>
                        <li>Legal Requirements: We may disclose personal information if required to do so by law or in the good-faith belief that such action is necessary to comply with applicable laws, regulations, or legal processes.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Data Security</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>Simmer Eats takes reasonable measures to protect the personal information collected in the project from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Third-Party Links</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>The project may contain links to third-party websites or services. This privacy policy does not apply to those websites or services. We encourage you to review the privacy policies of any third-party websites or services you visit.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Children's Privacy</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>The project is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13 years of age. If we become aware that personal information has been collected from a child under 13 without verifiable parental consent, we will take steps to delete that information promptly.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Changes to the Privacy Policy</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>Simmer Eats reserves the right to update or modify this privacy policy at any time. Any changes to the policy will be effective immediately upon posting the revised version on the project. Your continued use of the project after the posting of any changes constitutes your acceptance of such changes.</li>
                    </ol>
                </li>

                <li className="mt-4">
                    <span className="font-semibold">Contact Information</span>
                    <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside font-normal">
                        <li>If you have any questions or concerns about this privacy policy or the project's practices regarding personal information, please contact the creator at <span className="font-semibold">work.raquelferreira@gmail.com</span>.</li>
                    </ol>
                </li>             
            </ol>
        </div>
    );
}