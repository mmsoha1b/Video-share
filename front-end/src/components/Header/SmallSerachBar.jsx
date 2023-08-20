import { AiOutlineSearch } from "react-icons/ai"
import NavIcon from "./NavIcon"
import { BiSolidMicrophone } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx"
import { BsArrowLeftShort } from "react-icons/bs"
import PropTypes from 'prop-types'
const SmallSearchBar=({searchFilter, searchActive, acitvateSearch, deactivateSearch, handleSearchFilter, resetSearchFilter}) =>{
  return(
    <>
    <div className="w-full flex px-4 mt-2 justify-between">
      <div className=" min-w-0  gap-4 px-2 flex flex-grow max-w-3xl flex-shrink">
        <div className='flex flex-shrink w-full  min-w-0 rounded-full '>
          <div className="w-11 h-11 flex justify-center items-center hover:cursor-pointer mr-2 hover:bg-gray-200 rounded-full" onClick={deactivateSearch}>
            <BsArrowLeftShort className="text-4xl"/>
          </div>
          <div className='min-w-0 focus-within:border-solid  focus-within:border-slate-400 focus-within:border-[3px] flex shadow-inner justify-start items-center rounded-s-full flex-grow bg-white border-solid border-gray-300  border-2 pl-[1em] pr-[0em]  text-lg text-gray-600'>
            {searchActive? <div className='w-auto flex  justify-center items-center'> <AiOutlineSearch className='text-2xl'/></div>:null}
            <input
              className='w-full ml-2 focus:outline-none' placeholder='Search'
              onFocus={acitvateSearch} onBlur={deactivateSearch}
              value={searchFilter} onChange={handleSearchFilter}/>
            {searchFilter.length>0 ? <div className='p-2 bg-none hover:bg-gray-200 hover:cursor-pointer rounded-full flex justify-center items-center' onClick={resetSearchFilter} ><RxCross1 className='text-2xl'/></div>:null}
          </div>
          <div className='flex-shrink-0 flex-grow-0 w-[64px]  hover:cursor-pointer bg-gray-200 rounded-e-full border-gray-200 border-2 flex items-center justify-center'>
            <AiOutlineSearch className='text-2xl'/>
          </div>
        </div>
        <div className="h-full flex justify-center items-center">
          <NavIcon Icon= { <BiSolidMicrophone className='text-2xl'/> } />
        </div>
      </div>
    </div>
    </>
  )
}
SmallSearchBar.propTypes={
  searchFilter:PropTypes.string,
  searchActive:PropTypes.bool,
  acitvateSearch:PropTypes.func,
  deactivateSearch:PropTypes.func,
  handleSearchFilter:PropTypes.func,
  resetSearchFilter:PropTypes.func,
}
export default SmallSearchBar
