import Restimage from '@/shared/assets/images/Mask Group.svg'
import Star from '@/shared/assets/icons/Star (1).svg'
import Save from '@/shared/assets/icons/Book Mark.svg'

const ReastaurantCard = () => {
    return (
        <div className="flex flex-col rounded-4xl shadow-xl transition-transform duration-250 hover:scale-108">
            <img src={Restimage} alt="rest" />
            <div className='flex flex-col pl-[35px] pr-[25px] pt-2.5 pb-4'>
                <div className='flex'>
                    <div className='bg-[#F7EDD0] rounded-[5px] px-2 py-1'>
                        <p className='font-normal text-[12px] text-[#DAA31A]'>Healthy</p>
                    </div>
                </div>
                <h1 className='font-semibold text-2xl text-[#323142] mt-1'>The Chicken King</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <p className='text-lg font-normal text-[#8E97A6]'>24min •</p>
                        <img src={Star} alt="star" />
                        <p className='font-normal text-xl text-[#8E97A6]'>4.8</p>
                    </div>
                    <img src={Save} alt="save" className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
};


export { ReastaurantCard }