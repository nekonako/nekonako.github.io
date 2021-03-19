import * as React from 'react'
import dynamic from 'next/dynamic'
import tempe from 'tempe'
import Link from 'next/link'
const LineIcon = dynamic(
   () => import('react-lineicons'),
   {ssr : false}
)

export default function Card({ id, title, tags, desc, date, slug }){
   return(
      <>
         <div  key={id} className='my-4 md:m-4 overflow-hidden rounded-lg bg-secondary'>
            <div className='p-4'>
               <div>
                  <div className='text-xl font-extrabold'>
                     <Link href={'post/' + slug}>
                        {title}
                     </Link>
                  </div>
                  <div className='flex flex-row pt-2 pb-2 mb-2 text-secondary postBorder'>
                     <span className='text-xs text-secondary'>
                        <LineIcon name='calendar'/>
                        {tempe(date).format(" d, DD MMMM YYYY")}
                     </span>
                  </div>
                  <div className='pb-4 text-secondary'>
                     {desc}
                  </div>
                  {tags}
               </div>
            </div>
         </div>
         </>
   )
}
