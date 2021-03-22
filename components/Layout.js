import Footer from './Footer'

export default function Layout({ children }){
   return (
      <div className="flex flex-col md:w-2/3 min-h-screen">
         <div className='w-full mt-16 '>
            {children}
         </div>
         <Footer/>
      </div>
   )
}
