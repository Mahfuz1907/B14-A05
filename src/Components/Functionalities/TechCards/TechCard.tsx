import '../../../App.css';
import type { TechPromiseTypes } from '../../../type';

export interface TechCardProp{
    tech:TechPromiseTypes
}

function TechCard({tech}:TechCardProp) {
    return (
        <div className='rounded-2xl bg-[#ffffff01] shadow-sm hover:shadow-lg shadow-[#0000000D] p-5 flex flex-col justify-between items-start gap-5'>
            <div className='flex flex-row justify-between items-center'>
                <img src={tech.icon} alt="" />
            </div>
            <div></div>
            <div></div>
            <button className='cursor-pointer w-full'>Add to Stack</button>
        </div>
    );
};

export default TechCard;