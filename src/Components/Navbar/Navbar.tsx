import { useState } from 'react';
import '../../App.css';
import Logo from '/assets/logo-text.png'

function Navbar() {

    const [active, setActive] = useState(1)

    const handleActive = (seriol:number):void => {
        setActive(seriol)
    }

    return (
        <div className='flex flex-row justify-between items-center border border-[#f1f5f9] px-25 py-6'>
            <img className='cursor-pointer' src={Logo} alt="" />
            <ul className='pjs flex flex-row justify-between items-center gap-7 hover:text-black'>
                <li onClick={() => handleActive(1)} className={`cursor-pointer ${active === 1 ? 'activeUI' : 'inactiveUI'}`}>Home</li>
                <li onClick={() => handleActive(2)} className={`cursor-pointer ${active === 2 ? 'activeUI' : 'inactiveUI'}`}>Technologies</li>
                <li onClick={() => handleActive(3)} className={`cursor-pointer ${active === 3 ? 'activeUI' : 'inactiveUI'}`}>Projects</li>
                <li onClick={() => handleActive(4)} className={`cursor-pointer ${active === 4 ? 'activeUI' : 'inactiveUI'}`}>About</li>
                <li onClick={() => handleActive(5)} className={`cursor-pointer ${active === 5 ? 'activeUI' : 'inactiveUI'}`}>Contact</li>
            </ul>
            <div className='flex flex-row justify-between items-center gap-5 text-sm'>
                <button className='cursor-pointer text-[#334155] hover:text-black font-medium'>Sign In</button>
                <button className='cursor-pointer border border-[#d91b7e] hover:border-[#860f4a] drop-shadow-sm drop-shadow-[#fbcfe8] bg-[#d91b7e] hover:bg-[#860f4a] rounded-full px-5 py-2.5 text-white font-semibold'>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;