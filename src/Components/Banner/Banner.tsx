import '../../App.css';
import Stack from '/assets/banner-stack.png'

function Banner() {
    return (
        <div className='px-5 sm:px-10 lg:px-25 my-10 sm:my-0 flex flex-col sm:flex-row justify-between items-center w-full'>
            <div className='flex flex-col justify-between items-center sm:items-start gap-6 sm:flex-1'>
                <h1 className='flex flex-col justify-center items-center sm:items-start gap-1 inter text-6xl font-extrabold'>
                    <span className='text-[#0f172a]'>Build Your Ideal</span>
                    <span className='bg-linear-to-r bg-clip-text text-transparent from-[#ff5722] from-0% via-[#d81b7e] via-50% to-[#7c3aed] to-100%'>Development Stack</span>
                </h1>
                <p className='text-[#475569] pjs text-center sm:text-start text-lg font-normal'>Explore frontend, backend, database, and tooling options,
                   compare them side by side, and put together the stack that fits your
                   next project.</p>
                <div className='flex flex-row justify-center sm:justify-start items-center gap-3 inter'>
                    <button className='cursor-pointer text-white text-sm font-semibold rounded-lg px-4 drop-shadow-sm drop-shadow-[#000000D] py-3 bg-linear-to-r from-[#ff5722] hover:from-[#fe5927] from-0% via-[#d81b7e] hover:via-[#d15595] via-50% to-[#7c3aed] to-100%'>Explore Technologies</button>
                    <button className='cursor-pointer px-4 py-3 rounded-lg border border-[#e5e7eb] hover:bg-[#e5e7eb] bg-white text-[#374151 text-sm font-normal]'>Learn More</button>
                </div>
            </div>
            <img className='flex-1' src={Stack} alt="" />
        </div>
    );
};

export default Banner;