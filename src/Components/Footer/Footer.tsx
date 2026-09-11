import '../../App.css';
import { GoDotFill } from "react-icons/go";

function Footer() {
    return (
        <div className='border border-[#f1f5f9] bg-white px-5 sm:px-10 lg:px-25 pt-16 pb-12 flex flex-col justify-between items-center sm:items-start gap-14'>
            <div className='flex flex-row justify-start items-center sm:items-start gap-10 lg:gap-40'>
                <div className='flex flex-col justify-between items-center sm:items-start gap-3'>
                    <img src="/assets/logo-text.png" alt="" />
                    <p className='text-[#64748b] pjs text-xs font-normal'>Curated tools, technologies, and resources for developers building modern software.</p>
                    <ul className='flex flex-row justify-start items-center gap-4 text-[#475569] pjs text-xs font-semibold'>
                        <li className='cursor-pointer hover:text-[#d91b7e]'>GitHub</li>
                        <li className='sm:hidden'><GoDotFill /></li>
                        <li className='cursor-pointer hover:text-[#d91b7e]'>Twitter</li>
                        <li className='sm:hidden'><GoDotFill /></li>
                        <li className='cursor-pointer hover:text-[#d91b7e]'>LinkedIn</li>
                    </ul>
                </div>
                <div className='hidden sm:flex flex-col justify-between items-start gap-4'>
                    <h1 className='text-[#0f172a] pjs text-xs font-bold'>PRODUCT</h1>
                    <ul className='flex flex-col justify-between items-start gap-2.5 pjs text-[#64748b] text-xs font-normal'>
                        <li className='cursor-pointer hover:text-black'>Home</li>
                        <li className='cursor-pointer hover:text-black'>Technologies</li>
                        <li className='cursor-pointer hover:text-black'>Projects</li>
                    </ul>
                </div>
                <div className='hidden sm:flex flex-col justify-between items-start gap-4'>
                    <h1 className='text-[#0f172a] pjs text-xs font-bold'>COMPANY</h1>
                    <ul className='flex flex-col justify-between items-start gap-2.5 pjs text-[#64748b] text-xs font-normal'>
                        <li className='cursor-pointer hover:text-black'>About</li>
                        <li className='cursor-pointer hover:text-black'>Contact</li>
                        <li className='cursor-pointer hover:text-black'>Careers</li>
                    </ul>
                </div>
                <div className='hidden sm:flex flex-col justify-between items-start gap-4'>
                    <h1 className='text-[#0f172a] pjs text-xs font-bold'>LEGAL</h1>
                    <ul className='flex flex-col justify-between items-start gap-2.5 pjs text-[#64748b] text-xs font-normal'>
                        <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
                        <li className='cursor-pointer hover:text-black'>Terms of Service</li>
                    </ul>
                </div>
            </div>
            <div className='border border-[#f1f5f9] pt-8 pjs text-xs font-normal text-[#94a3b8] flex flex-row justify-between items-end w-full'>
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <ul className='flex flex-row justify-end items-center gap-6'>
                    <li className='cursor-pointer hover:text-black'>Privacy</li>
                    <li className='cursor-pointer hover:text-black'>Terms</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;