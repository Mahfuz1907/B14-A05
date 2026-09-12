import type { Dispatch, SetStateAction } from 'react';
import '../../../App.css';
import type { TechPromiseTypes } from '../../../type';
import { RxCross1 } from "react-icons/rx";

export interface StackType{
    stack: TechPromiseTypes, 
    stackArray: TechPromiseTypes[],
    setStackArray: Dispatch<SetStateAction<TechPromiseTypes[]>>
}

function Stack({stack, stackArray, setStackArray} :StackType) {

    const removeStackButton = (item:TechPromiseTypes):void => {
        const updateArray = stackArray.filter((thing)=> thing.id !== item.id)
        setStackArray(updateArray)
    }
    return (
        <div className='border border-[#e2e8f0] rounded-lg flex flex-row justify-between items-center w-full p-2.5'>
            <div className='flex flex-row justify-start items-center gap-2'>
                <img className='w-7 h-7' src={stack.icon} alt="" />
                <div className='flex flex-col justify-center items-start'>
                    <h1 className='text-[#111827] text-base font-bold'>{stack.name}</h1>
                    <p className='text-[#4b5563] text-xs font-normal'>{stack.category}</p>
                </div>
            </div>
            <RxCross1 onClick={()=> removeStackButton(stack)} className='cursor-pointer w-5 h-5 hover:text-[#d82c20] hover:font-bold'/>
        </div>
    );
};

export default Stack;