import '../../../App.css';
import type { TechPromiseTypes } from '../../../type';

export interface TechCardProp{
    tech:TechPromiseTypes
}

function TechCard({tech}:TechCardProp) {
    return (
        <div className='rounded-2xl bg-[#ffffff01] shadow-sm hover:shadow-lg shadow-[#0000000D] cursor-pointer p-5 flex flex-col justify-between items-start gap-5'>
            <div></div>
            <div></div>
            <div></div>
            <button>Add to Stack</button>
        </div>
    );
};

export default TechCard;