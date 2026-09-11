import { use, useState } from 'react';
import '../../App.css';
import StackCard from './StackCards/StackCard';
import TechCards from './TechCards/TechCards';
import type { TechPromiseTypes } from '../../type';

export interface TechnologiesPromiseTypes {
    TechnologiesPromise: Promise<TechPromiseTypes[]>
}



function Functionalities({TechnologiesPromise}:TechnologiesPromiseTypes) {

    const techPromise = use(TechnologiesPromise)

    const [stackArray, setStackArray] = useState<TechPromiseTypes[]>([])

    return (
        <div className='px-5 sm:px-10 lg:px-25 mt-28 mb-17.5 flex flex-col justify-between items-start gap-5'>
            <div className='flex flex-col justify-between items-start gap-3'>
                <h1 className='text-[#0f172a] text-4xl font-extrabold'>Explore The <span className='bg-linear-to-r bg-clip-text text-transparent from-[#ff5722] from-0% via-[#d81b7e] via-50% to-[#7c3aed] to-100%'>Technologies</span></h1>
                <p className='text-[#64748b] text-base font-normal'>Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className='grid grid-cols-4 justify-between items-start gap-8 w-full'>
                <TechCards techPromise={techPromise} stackArray={stackArray} setStackArray={setStackArray} />
                <StackCard />
            </div>
        </div>
    );
};

export default Functionalities;