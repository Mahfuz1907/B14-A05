import '../../../App.css';
import type { TechPromiseTypes } from '../../../type';
import TechCard from './TechCard';

export interface TechPromiseCardTypes{
    techPromise: TechPromiseTypes[]
}

function TechCards({techPromise}:TechPromiseCardTypes) {
    return (
        <div className='col-span-3 grid grid-cols-3 justify-between items-start gap-10.5'>
            {
                techPromise.map((tech) => <TechCard key={tech.id} tech={tech} />)
            }
        </div>
    );
};

export default TechCards;