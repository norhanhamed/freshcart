import React, { useContext, useEffect } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { userContext } from '../../Context/User.context'
import { CartContext } from '../../Context/Cart.context'
export default function Navbar() {
  const { token, setToken} = useContext(userContext);
  const { getCartInfo, cartInfo } = useContext(CartContext);
  const navigate = useNavigate();
  //logout fun
  function logout(){
    localStorage.removeItem("token");
    setToken(null);
    navigate('/auth/login')
  }
  useEffect(() => { getCartInfo() }, [])
  return (
    <>
      <nav className='bg-slate-100 p-3 mb-3 '>
        <div className=" container flex gap-8">
          <h1 className="logo">
            <img src={logo} alt="" />
          </h1>
          {/* navigation ul */}
          {token ?
            <ul className='flex gap-6 items-center'>
              <li>
                <NavLink to=""
                  className={({ isActive }) => {
                    return `relative before:h-[2px]  hover:before:w-full hover:font-bold before:transition-[width]
                 before:duration-300 before:bg-primary before:absolute before:left-0 before:-bottom-1
               
                ${isActive ? "font-bold before:w-full" : "before:w-0"}`
                  }}
                >Home </NavLink>
              </li>
              <li>
                <NavLink to="/allProducts"
                  className={({ isActive }) => {
                    return `relative before:h-[2px]  hover:before:w-full hover:font-bold before:transition-[width]
                 before:duration-300 before:bg-primary before:absolute before:left-0 before:-bottom-1
               
                ${isActive ? "font-bold before:w-full" : "before:w-0"}`
                  }}>Products </NavLink>
              </li>
              <li>
                <NavLink to="/categories/id"
                  className={({ isActive }) => {
                    return `relative before:h-[2px]  hover:before:w-full hover:font-bold before:transition-[width]
                 before:duration-300 before:bg-primary before:absolute before:left-0 before:-bottom-1
                ${isActive ? "font-bold before:w-full" : "before:w-0"}`
                  }}>
                  Categories </NavLink>
              </li>
              <li>
                <NavLink to="brands"
                  className={({ isActive }) => {
                    return `relative before:h-[2px]  hover:before:w-full hover:font-bold before:transition-[width]
                 before:duration-300 before:bg-primary before:absolute before:left-0 before:-bottom-1
                ${isActive ? "font-bold before:w-full" : "before:w-0"}`
                  }}>Brands </NavLink>
              </li>
              <li>
                <NavLink to="/allorders"
                  className={({ isActive }) => {
                    return `relative before:h-[2px]  hover:before:w-full hover:font-bold before:transition-[width]
                 before:duration-300 before:bg-primary before:absolute before:left-0 before:-bottom-1
                ${isActive ? "font-bold before:w-full" : "before:w-0"}`
                  }}>Orders </NavLink>
              </li>

            </ul> : ""}

          <Link to="/cart"
                className="ms-auto relative">
            <i className='fa-solid fa-cart-shopping text-lg'></i>
            <span className='bg-primary absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full text-sm font-bold text-white flex justify-center items-center'>
              {cartInfo === null ? <i className='fa-solid fa-spinner fa-spin '></i>: cartInfo.numOfCartItems ||0 }
            </span>
          </Link>
          {/* media ul  */}
          <ul className='flex gap-6 items-center '>
            <li>
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fa-brands fa-linkedin"></i>              </Link>
            </li>
          </ul>
          {/* authentication ul */}
          <ul className="flex gap-6 items-center">
            {!token ? (
              <>
                <li>
                  <NavLink to='/auth/login'
                    className={({ isActive }) => {
                      return `relative before:h-[2px]  hover:before:w-full hover:font-bold before:transition-[width]
                 before:duration-300 before:bg-primary before:absolute before:left-0 before:-bottom-1
               
                ${isActive ? "font-bold before:w-full" : "before:w-0"}`
                    }}>Login</NavLink>
                </li>
                <li>
                  <NavLink to='/auth/register'
                    className={({ isActive }) => {
                      return `relative before:h-[2px]  hover:before:w-full hover:font-bold before:transition-[width]
                 before:duration-300 before:bg-primary before:absolute before:left-0 before:-bottom-1
               
                ${isActive ? "font-bold before:w-full" : "before:w-0"}`
                    }}>Register</NavLink>
                </li>
              </>
            ) : (
              <li className='cursor-pointer'   >
                <span >
                  <i className='fa-solid fa-right-from-bracket text-2xl' onClick={()=>logout()}></i>
                </span>
              </li>)}
          </ul>
        </div>
      </nav>

    </>
  )
}

