import React from 'react'

const StatsComponent = ({ stats }) => {
    const statsBar = Math.floor(100 - 1000000 / stats.backed);
    const formattedBacked = stats.backed.toLocaleString();
    const formattedBackers = stats.backers.toLocaleString();
    const formattedDays = stats.daysLeft.toLocaleString();
    return (
        <section className='flex flex-col justify-center items-center bg-white rounded-lg border-2 border-[#f4f4f4] py-12 md:px-16'>
            <div className='w-full flex flex-col md:flex-row justify-start gap-12 mb-10'>
                <div className='flex flex-col items-start'>
                    <p className='text-4xl font-semibold text-black'>${formattedBacked}</p>
                    <p className='text-base font-medium text-darkGray mt-2'>of $100,000 backed</p>
                </div>
                <div className='w-[1px] mx-2 bg-[#dddddd]' />
                <div className='flex flex-col items-start'>
                    <p className='text-4xl font-semibold text-black'>{formattedBackers}</p>
                    <p className='text-base font-medium text-darkGray mt-2'>total backers</p>
                </div>
                <div className='w-[1px] mx-2 bg-[#dddddd]' />
                <div className='flex flex-col items-start'>
                    <p className='text-4xl font-semibold text-black'>{formattedDays}</p>
                    <p className='text-base font-medium text-darkGray mt-2'>days left</p>
                </div>
            </div>
            <div className='w-full h-3 bg-[#f4f4f4] rounded-full overflow-hidden relative'>
                <div className='bg-moderateCyan h-full rounded-full' style={{width: statsBar +'%'}} />
            </div>
        </section>
    )
}

export default StatsComponent