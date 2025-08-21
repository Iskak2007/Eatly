import Star from '@/shared/assets/icons/Star (1).svg'
import Heart from '@/shared/assets/icons/heart-svgrepo-com.svg'
import Food from '@/shared/assets/images/Food Image.svg'
import Plus from '@/shared/assets/icons/+ (1).svg'

const ProductCard = () => {
    return (
        <div className="flex flex-col rounded-[34px] shadow-xl transition-transform duration-250 hover:scale-108">
            <img src={Heart} alt="heart" className='w-5 h-5 relative ml-40 mt-2.5'/>
            <img src={Food} alt="food" />
            <div className='flex flex-col pl-[23px] pr-[27px] pt-2.5 pb-4'>
                <div className='flex'>
                    <div className='bg-[#F7EDD0] rounded-[4px] px-2 py-1'>
                        <p className='font-normal text-[11px] text-[#DAA31A]'>Healthy</p>
                    </div>
                </div>
                <h1 className='font-semibold text-2xl text-[#323142] mt-1'>Chicken Hell</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <p className='text-lg font-normal text-[#8E97A6]'>24min •</p>
                        <img src={Star} alt="star" />
                        <p className='font-normal text-xl text-[#8E97A6]'>4.8</p>
                    </div>
                </div>

                <div className='flex justify-between mt-3'>
                    <p className='font-bold text-[25px] text-[#323142]'>$12 <span className='font-bold text-lg text-[#8E97A6]'>.99</span></p>
                    <button className='bg-[#323142] py-3 px-3 rounded-[9px]'>
                        <img src={Plus} alt="" />
                    </button>
                </div>
            </div>
        </div>)
}

export { ProductCard }