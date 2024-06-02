import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function FooterMaterial() {

    const currentYear = new Date().getFullYear();

  return (
    <>
    <div className="flex flex-row justify-between lg:px-20 md:px-10 px-3 border-b-[1px] border-zinc-300 pb-14">
        <div className="flex flex-col justify-evenly">
            <h1 className="lg:text-xl text-base text-zinc-800 cursor-pointer">Quick Access</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Cosmetic</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Skin Care</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Home Hygiene</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Child Care</h1>
        </div>
        <div className="flex flex-col justify-evenly">
            <h1 className="lg:text-xl text-base text-zinc-800 cursor-pointer">About Shavaz</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">About Us</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Contact Us</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Frequently Asked Questions</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Career Opportunities</h1>
        </div>
        <div className="flex flex-col justify-evenly">
            <h1 className="lg:text-xl text-base text-zinc-800 cursor-pointer">Purchase Guide</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">How To Place An Order</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Payment Methods</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Shipping Methods</h1>
            <h1 className="lg:text-sm text-xs text-zinc-600 cursor-pointer mt-3">Return Terms</h1>
        </div>
    </div>
    <div className="flex flex-row justify-between lg:px-20 md:px-10 px-3 pb-10 pt-10">
        <div className="flex flex-row w-5/6">
            <h5 className="text-zinc-700 md:text-sm text-xs">© {currentYear} Shavaz Cosmetic. All Rights Reserved.</h5>
        </div>
        <div className="flex flex-row justify-between w-1/6">
            <FaFacebook className="text-zinc-600 hover:text-zinc-800 cursor-pointer md:text-xl text-base"/>
            <AiFillInstagram className="text-zinc-600 hover:text-zinc-800 cursor-pointer md:text-xl text-base"/>
            <FaTwitter className="text-zinc-600 hover:text-zinc-800 cursor-pointer md:text-xl text-base"/>
            <FaGithub className="text-zinc-600 hover:text-zinc-800 cursor-pointer md:text-xl text-base"/>
            <FaReddit className="text-zinc-600 hover:text-zinc-800 cursor-pointer md:text-xl text-base"/>
        </div>
    </div>
    </>
  );
}