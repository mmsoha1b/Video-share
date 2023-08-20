import PropTypes from 'prop-types'

const NavIcon = ({ Icon, extraStyle, clickHandler })=>{
  return(
    <div onClick={clickHandler} className={`w-11 h-11 p-2 hover:bg-gray-500 hover:bg-opacity-20 hover:cursor-pointer rounded-full flex justify-center items-center ${extraStyle}`}>
      {Icon}
    </div>
  )
}

NavIcon.propTypes={
  Icon: PropTypes.element,
  extraStyle: PropTypes.string,
  clickHandler:PropTypes.func,
}

export default NavIcon
