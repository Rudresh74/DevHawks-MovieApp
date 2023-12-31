import React from "react"
import Image from "next/image"
import StepOne from "../../public/stepOne.gif"
import StepTwo from "../../public/stepTwo.gif"
import StepThree from "../../public/stepThree.gif"
import Logo from "../../public//DevLogo.png"
// import { NextSeo } from "next-seo"

export default function Help() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Image src={Logo} width={180} height={200} alt={""} style={{ display: 'block', margin: 'auto' }} className="py-8" />
            <div className="flex flex-col py-8 px-8 sm:px-16 justify-center lg:w-4/6 w-full">
                <h1 className="text-2xl font-semibold">Connecting Devhawks to Your Notion Account</h1>
                <p className="pt-6">Setting up a connection between Devhawks and your Notion account may seem intimidating, but it's very straightforward. I've broken down the process into three easy steps that should take no more than five minutes to complete.</p>
                <p>If you want to learn more about the technical implementaion of this project, make sure to read the <span className="text-blue-500"><a href="https://github.com/2023-Summer-ITE-5425-0NA/react-project-devhawks">documentation</a></span>.</p>
                <div className="flex flex-col mt-10 justify-center w-full">
                    <h1 className="text-xl font-semibold">Step 1: Create an Integration in Notion</h1>
                    <p className="pt-4">If you don't already have a Notion account, you can create one <span className="text-blue-500"><a href="https://www.notion.so/">here</a></span>.</p>
                    <p>Once you've set up your account, navigate to the <span className="text-blue-500"><a href="https://www.notion.so/my-integrations">"My integrations"</a></span> section and click on "Create new integration." Give it a name and Notion will generate an Internal Integration Token for you. This token will be used to establish a connection between ClickNotes and Notion.</p>
                    <Image src={StepOne} width={700} height={600} alt={""} style={{ display: 'block', margin: 'auto' }} className="py-8" />
                </div>
                <div className="flex flex-col mt-10 justify-center w-full">
                    <h1 className="text-xl font-semibold">Step 2: Add Database Templates</h1>
                    <p className="pt-4">I've created three Notion templates that you'll need to duplicate to store your content. The column names and types of these templates are compatible with the ClickNotes API, so make sure not to modify them. Feel free to add new columns, but note that they won't be affected by the Devhawks API and will need to be filled in manually (e.g "My rating").</p>
                    <ol className="py-4 px-4">
                        <li> • <span className="text-blue-500"><a href="https://drensokoli.notion.site/65f8607afe9e4773a82e6a1806ca312c?v=027421f09805471f8d9c8cb6f5fcb1f3">Movies template</a></span></li>
                        <li> • <span className="text-blue-500"><a href="https://drensokoli.notion.site/2743e54a24b944558deb1bfd62bc2938?v=85cf49ab3d09472182624fcaa332135d">TV Shows template</a></span></li>
                        <li> • <span className="text-blue-500"><a href="https://drensokoli.notion.site/b3d96ee5ab1046deb1d760595a31eff8?v=2e4881e5c77a445c945112aac8e46dbf">Books template</a></span></li>
                    </ol>
                    <Image src={StepTwo} width={700} height={600} alt={""} style={{ display: 'block', margin: 'auto' }} className="py-4" />
                </div>
                <div className="flex flex-col mt-10 justify-center w-full">
                    <h1 className="text-xl font-semibold">Step 3: Connect Your Database</h1>
                    <p className="pt-4">After duplicating the templates, you'll need to add the Token generated in the previous step as a connection by clicking on the "Add connections" button and searching for it by name. This action grants your Integration Token read and write permissions to the corresponding Notion page.</p>
                    <Image src={StepThree} width={700} height={600} alt={""} style={{ display: 'block', margin: 'auto' }} className="py-8" />
                    <p>Finally, save your page (database) link in your Devhawks profile page by clicking "Share," "Copy link," and pasting it in the appropriate input field in your Devhawks profile page.</p>
                    <p>These steps apply to any of the three content types you want to save. Just add the respective template and save the link to the corresponding field in your profile page.</p>
                </div>
                <div className="flex flex-col mt-10 justify-center w-full">
                    <p className="text-center">🎉 That's it! You've successfully connected your Notion database to Devhawks! 🎉</p>
                    <p className="text-center">Go ahead and save your favorite movies, TV shows, or books.</p>
                </div>
            </div>

        </div>
    )
}
