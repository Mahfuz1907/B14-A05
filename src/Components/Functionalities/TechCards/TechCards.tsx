import type { Dispatch, SetStateAction } from 'react';
import '../../../App.css';
import type { TechPromiseTypes } from '../../../type';
import TechCard from './TechCard';

export interface TechPromiseCardTypes{
    techPromise: TechPromiseTypes[], 
    stackArray: TechPromiseTypes[],
    setStackArray: Dispatch<SetStateAction<TechPromiseTypes[]>>
}

function TechCards({techPromise, stackArray, setStackArray}:TechPromiseCardTypes) {
    return (
        <div className='col-span-3 grid grid-cols-3 justify-between items-start gap-10.5'>
            {
                techPromise.map((tech) => <TechCard key={tech.id} tech={tech} stackArray={stackArray} setStackArray={setStackArray} />)
            }
        </div>
    );
};

export default TechCards;