import { Emojis } from '../lib/utils'
import { X } from 'lucide-react'

function IconsItem({placeholder}:{placeholder : string}) {
  return (
    <form className='flex flex-col gap-y-2'>
      <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" placeholder={placeholder} />
      <div className='flex flex-wrap gap-y-2'>
    {
        Emojis.map((ele) =>(
            <div className='border flex  rounded-xl gap-x-1'>
                {ele} <X className='text-red-500 cursor-pointer'/>
            </div>
        ))
    }
      </div>
    </form>
  )
}

export default IconsItem
