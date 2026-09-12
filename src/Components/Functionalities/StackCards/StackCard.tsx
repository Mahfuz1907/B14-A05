import type { Dispatch, SetStateAction } from 'react';
import '../../../App.css';
import type { TechPromiseTypes } from '../../../type';
import Stack from './Stack';
import { toast } from 'react-toastify';

export interface StackCardsTypes{
    stackArray: TechPromiseTypes[], 
    setStackArray:Dispatch<SetStateAction<TechPromiseTypes[]>>
}

function StackCard({stackArray, setStackArray}: StackCardsTypes) {

    const handleClearStackButton = () => {
        const newArray:TechPromiseTypes[] = []
        setStackArray(newArray)
        toast.info('Stack Cleared')
    }
    
    return (
        <div className='sticky top-22.5 col-span-1'>
            {
                stackArray.length === 0 ? 
                <div className='pjs bg-white border border-[#f1f5f9] rounded-2xl p-5 flex flex-col justify-between items-start gap-4'>
                    <div className='flex flex-col justify-between items-start gap-1'>
                        <h1 className='text-[#0f172a] text-base font-bold'>Your Stack</h1>
                        <p className='text-[#94a3b8] text-xs font-normal'>No technologies selected yet.</p>
                    </div>
                    <div className='border border-dashed border-[#e2e8f0] p-6 w-full flex justify-center items-center rounded-xl'>
                        <p className='text-[#94a3b8] text-xs font-normal'>Your stack is empty.</p>
                    </div>
                </div>
                : 
                <div className='bg-white border border-[#f1f5f9] rounded-2xl p-5 flex flex-col justify-between items-start gap-12'>
                    <div className='flex flex-col justify-between items-start gap-4 w-full'>
                        <div className='flex flex-col justify-between items-start gap-1'>
                            <h1 className='text-[#0f172a] text-base font-bold'>Your Stack</h1>
                            <p className='text-[#94a3b8] text-xs font-normal'>{stackArray.length} Technology Selected</p>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-1 w-full'>
                            {
                                stackArray.map((stack) => <Stack key={stack.id} stack={stack} stackArray={stackArray} setStackArray={setStackArray} />)
                            }
                        </div>
                    </div>
                    <button onClick={()=> handleClearStackButton()} className='removeAllButton'>Remove All</button>
                </div> 
            }
        </div>
    );
};

export default StackCard;