import { type Dispatch, type SetStateAction } from 'react';
import '../../../App.css';
import type { TechPromiseTypes } from '../../../type';
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';

export interface TechCardProp{
    tech:TechPromiseTypes, 
    stackArray: TechPromiseTypes[],
    setStackArray: Dispatch<SetStateAction<TechPromiseTypes[]>>
}

function TechCard({tech, stackArray, setStackArray}:TechCardProp) {

    const handleAddButton = (item:TechPromiseTypes):void => {
        const isAlreadyIn = stackArray.some((thing)=> item.id === thing.id)

        if(!isAlreadyIn) {
            const newArray = [...stackArray, item]
            setStackArray(newArray)
            toast.success(`${item.name} added to stack successfully`)
        }else if(isAlreadyIn){
            toast.warning(`${item.name} already added`)
        }
    }

    const alreadyInArray = stackArray.some((item) => item.id === tech.id)


    return (
        <div className='inter rounded-2xl bg-[#ffffff01] shadow-md hover:shadow-xl shadow-[#0000000D] p-5 flex flex-col justify-between items-start gap-5'>
            <div className='flex flex-row justify-between items-center w-full'>
                <img className='w-10 h-10' src={tech.icon} alt="" />
                <button className={`badge ${tech.id === 1 || tech.id === 5 || tech.id === 7 || tech.id === 8 || tech.id === 10 || tech.id === 12 || tech.id === 13 ? 'badge-blue' : tech.id === 6 || tech.id === 2 || tech.id === 3 ? 'badge-green' : tech.id === 4 || tech.id === 9 ? 'badge-black' : tech.id === 14 || tech.id === 15 ? 'badge-orange' : 'badge-violet'}`}>{tech.badge}</button>
            </div>
            <h1 className='text-[#111827] text-base font-bold'>{tech.name}</h1>
            <p className='text-[#4b5563] text-xs font-normal'>{tech.description}</p>
            <div className='flex flex-row justify-between items-center w-full text-[11px] font-normal'>
                <button className='bg-[#f3f4f6] px-2 py-0.5 rounded-sm text-[#4b5563]'>{tech.category}</button>
                <h4 className='text-[#6b7280]'>{tech.difficulty}</h4>
                <button className='flex flex-row justify-between items-center gap-1 text-[#f59e0b]'><FaStar />{tech.rating}</button>
            </div>
            <button 
            aria-disabled={alreadyInArray} 
            onClick={()=> handleAddButton(tech)} 
            className={`${alreadyInArray ? 'disabledButton' : 'enabledButton'}`}>
                {alreadyInArray ? '✓ Added to Stack' : 'Add to Stack'}
            </button>
        </div>
    );
};

export default TechCard;