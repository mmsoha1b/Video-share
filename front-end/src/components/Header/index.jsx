import { AiOutlineSearch } from 'react-icons/ai'
import { BiSolidMicrophone, BiVideoPlus } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'
import NavIcon from './NavIcon'
import PfpIcon from './PfpIcon'
import logoUrl from "@images/Logo.svg"
import { useState } from 'react'
const Header =()=>{
  // console.log(logoUrl)
  const [searchActive,setSearchActive] = useState(false)
  const [searchFilter,setSearchFilter] = useState('')
  // const [smSearchDisplay, setSmSearchDisplay ]= useState(false)
  const toggleSearchActive=()=>{
    setSearchActive(!searchActive)
  }
  const handleSearchFilter=(e)=>{
    setSearchFilter(e.target.value)
  }
  const resetSearchFilter = ()=>{
    setSearchFilter('')
  }
  return(
    <>
    <nav className="w-full">
      <div className="flex px-4 py-2 justify-between items-center gap-x-10">

        {/* Hamburger and Logo div */}
        <div className="flex gap-x-2 md:gap-x-4">
          <NavIcon Icon= { <RxHamburgerMenu className='text-3xl'/> } />
          <div className='w-[6.5em] h-6'>
          <img src={logoUrl} className='w-full h-6 mt-2 hover:cursor-pointer'/>
          </div>
        </div>

        {/* Search and  microphone div*/}
        <div className=" min-w-0 m:visible gap-4 px-2 md:flex md:ml-[40px] md:mr-[40px]  flex-grow max-w-3xl flex-shrink hidden">
          <div className='flex flex-shrink w-full  min-w-0 rounded-s-full rounded-e-full '>
            <div className='min-w-0 focus-within:border-solid focus-within:border-slate-400 focus-within:border-[3px] flex shadow-inner justify-start items-center rounded-s-full flex-grow bg-white border-solid border-gray-300  border-2 pl-[1em] pr-[0em]  text-lg text-gray-600'>
             {searchActive? <div className='h-full flex bg-none pr-4 justify-center items-center'> <AiOutlineSearch className='text-2xl'/></div>:null}
              <input
               className='w-full focus:outline-none py-2' placeholder='Search'
               onFocus={toggleSearchActive} onBlur={toggleSearchActive}
               value={searchFilter} onChange={handleSearchFilter}/>

             {searchFilter.length>0 ? <div className='p-2 bg-none hover:bg-gray-200 hover:cursor-pointer rounded-full flex justify-center items-center' onClick={resetSearchFilter} ><RxCross1 className='text-3xl'/></div>:null}

            </div>
            <div className='flex-shrink-0 flex-grow-0 w-[64px]  hover:cursor-pointer bg-gray-200 rounded-e-full border-gray-200 border-2 flex items-center justify-center'>
              <AiOutlineSearch className='text-2xl'/>
            </div>
          </div>
          <NavIcon Icon= { <BiSolidMicrophone className='text-2xl'/> }extraStyle='bg-gray-200' />
        </div>

        {/* Video Bell Profile Div */}
        <div className="flex gap-x-2 md:gap-x-4">
          <NavIcon Icon= { <AiOutlineSearch className="text-2xl"/> } extraStyle="md:hidden"/>
          <NavIcon Icon= { <BiSolidMicrophone className='text-2xl'/> } extraStyle="md:hidden"/>
          <NavIcon Icon= { <BiVideoPlus className='text-2xl'/> }/>
          <NavIcon Icon= { <BsBell className="text-2xl "/> }/>
          <PfpIcon />
        </div>

      </div>
    </nav>
    </>
  )
}
export default Header
