'use client'
import { setNavbarMobile } from '@/lib/redux/globalSlicer';
import { RootState } from '@/lib/redux/store';
import { SquareChevronLeft, SquareMenu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const navbarMobile = useSelector((state : RootState) => state.globalReducer.store.navbarMobileShow)
    const dispatch = useDispatch();
    const theme = useSelector((state : RootState) => state.globalReducer.store.navbarDarkTheme)

    const handleMenuMobile = () => {
        dispatch(setNavbarMobile(!navbarMobile))
    }
    
  return (

    <>
    <div className='transition-all'>
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className={`justify-between ${ navbarMobile ? "bg-[#6000c4]" : "bg-[#6000c4]"} px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8`}>
          <div>
            <div className="flex items-center justify-between py- md:py-1 md:block">
              {/* LOGO */}
              <Link href="/" aria-label="Goto home">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 48 48">
                        <path fill="#ef4823" d="M12.761,15.421c-2.687-0.776-5.732-0.059-8.053,1.502c-2.321,1.561-3.861,4.383-3.503,7.157	c0.125,0.973,0.29,2.271,0.629,3.191c0.674,1.83,2.003,3.399,3.636,4.465c2.154,1.407,4.718,1.303,7.279,1.059	c3.972-0.379,7.912-0.189,11.535,1.483c1.638,0.756,3.193,1.709,4.907,2.272c1.847,0.606,3.786,0.427,5.73,0.427	c1.514,0,3.385-0.268,4.676-1.059c2.735-1.676,4.059-2.824,5.868-5.912c0.663-1.132,1.08-3.161,1.324-4.676	c0.3-1.873-0.655-5.005-1.484-6.71c-1.553-3.196-3.06-5.072-6.285-6.564c-1.613-0.746-3.409-1.035-5.186-1.055	c-1.564-0.017-3.143,0.173-4.617,0.697c-2.504,0.89-4.571,2.683-6.906,3.953c-2.335,1.27-3.87,1.302-6.586,0.596	C15.211,16.113,13.273,15.568,12.761,15.421z"></path><path fill="#010101" d="M32.77,37.501c-1.244,0-2.506-0.074-3.733-0.478c-1.172-0.384-2.272-0.947-3.338-1.491	c-0.537-0.274-1.075-0.55-1.622-0.802c-3.084-1.422-6.669-1.881-11.278-1.438c-2.589,0.246-5.304,0.362-7.601-1.138	c-1.781-1.164-3.143-2.837-3.832-4.711c-0.356-0.967-0.527-2.302-0.653-3.276c-0.367-2.851,1.128-5.919,3.717-7.66	c2.614-1.758,5.784-2.343,8.472-1.567l0,0c0.51,0.147,2.438,0.69,2.952,0.823c2.733,0.709,4.13,0.587,6.221-0.552	c0.847-0.46,1.68-1.005,2.484-1.532c1.406-0.92,2.859-1.872,4.493-2.453c1.407-0.5,3.022-0.748,4.789-0.727	c2.045,0.022,3.858,0.392,5.391,1.101c3.474,1.606,5.022,3.709,6.524,6.799c0.809,1.664,1.597,4.455,1.535,6.942	c-0.038,1.512-0.636,3.625-1.392,4.917c-1.877,3.202-3.317,4.416-6.038,6.085c-1.668,1.021-4.009,1.132-4.938,1.132	c-0.356,0-0.713,0.007-1.069,0.013C33.494,37.494,33.133,37.501,32.77,37.501z M15.988,32.131c3.284,0,6.038,0.553,8.506,1.691	c0.56,0.258,1.109,0.539,1.659,0.819c1.031,0.527,2.097,1.071,3.195,1.433c1.425,0.467,2.913,0.442,4.487,0.414	c0.362-0.006,0.725-0.013,1.087-0.013c0.844,0,2.964-0.096,4.415-0.985c2.689-1.648,3.955-2.764,5.697-5.737	c0.588-1.004,1.218-2.938,1.255-4.437c0.058-2.306-0.703-4.975-1.434-6.479c-1.438-2.956-2.826-4.84-6.046-6.329	c-1.403-0.648-3.079-0.988-4.98-1.008c-1.701-0.015-3.148,0.208-4.444,0.669c-1.521,0.541-2.861,1.418-4.28,2.347	c-0.822,0.538-1.672,1.094-2.554,1.574c-2.591,1.407-4.306,1.328-6.951,0.641c-0.518-0.134-2.463-0.682-2.978-0.83l0,0	c-2.376-0.685-5.301-0.135-7.636,1.437c-2.283,1.534-3.604,4.218-3.286,6.678c0.122,0.952,0.285,2.222,0.603,3.082	c0.616,1.674,1.838,3.173,3.44,4.219c2.028,1.324,4.447,1.219,6.958,0.979C13.855,32.187,14.949,32.131,15.988,32.131z"></path><path fill="#010101" d="M13.868,30.118c-0.086-1.307-0.179-2.613-0.239-3.922c-0.03-0.66-0.052-1.32-0.066-1.98	c-0.006-0.288-0.086-0.704,0.018-0.979c0.109-0.287,0.519-0.5,0.759-0.664c0.955-0.653,2.273-1.104,3.07,0.044	c0.679,0.979,0.357,2.223-0.423,3.036c-0.934,0.973-2.355,1.238-3.649,1.317c-0.639,0.039-0.644,1.039,0,1	c1.456-0.089,2.999-0.389,4.122-1.384c1.08-0.956,1.657-2.491,1.115-3.88c-0.552-1.418-2.052-2.164-3.507-1.647	c-0.718,0.255-1.402,0.709-1.975,1.207c-0.676,0.587-0.543,1.455-0.523,2.264c0.046,1.866,0.174,3.727,0.297,5.59	C12.91,30.756,13.91,30.761,13.868,30.118L13.868,30.118z"></path><path fill="#010101" d="M23.015,21.234c-0.753,0.015-1.507,0.132-2.09,0.648c-0.601,0.532-0.888,1.343-0.955,2.124	c-0.066,0.773,0.115,1.602,0.528,2.262c0.432,0.689,1.094,1.139,1.855,1.4c1.341,0.461,3.282,0.538,4.273-0.669	c0.929-1.132,0.84-2.839,0.192-4.084c-0.342-0.657-0.884-1.203-1.577-1.478C24.556,21.165,23.737,21.225,23.015,21.234	c-0.643,0.008-0.645,1.008,0,1c0.962-0.012,1.969-0.107,2.638,0.713c0.607,0.746,0.823,1.874,0.539,2.79	c-0.373,1.205-1.716,1.356-2.792,1.163c-0.566-0.101-1.153-0.27-1.604-0.642c-0.471-0.389-0.74-0.982-0.818-1.581	c-0.084-0.649,0.043-1.391,0.472-1.904c0.392-0.469,0.991-0.528,1.566-0.539C23.657,22.222,23.66,21.222,23.015,21.234z"></path><path fill="#010101" d="M30.507,21.248c-1.513,0.4-2.287,1.913-2.415,3.378c-0.079,0.909,0.264,1.644,0.899,2.277	c0.548,0.546,1.227,0.974,1.969,1.201c1.458,0.447,3.159,0.021,4.071-1.243c0.423-0.586,0.65-1.338,0.583-2.061	c-0.073-0.782-0.475-1.471-0.943-2.085c-0.505-0.663-1.17-1.299-2.012-1.481C31.983,21.091,31.18,21.1,30.507,21.248	c-0.628,0.138-0.362,1.102,0.266,0.964c0.446-0.098,0.94-0.075,1.393-0.042c0.527,0.039,0.961,0.327,1.324,0.695	c0.771,0.782,1.436,1.886,0.969,2.992c-0.445,1.055-1.638,1.551-2.731,1.4c-0.571-0.079-1.116-0.33-1.578-0.669	c-0.451-0.331-0.966-0.811-1.055-1.389c-0.18-1.162,0.481-2.67,1.678-2.987C31.394,22.048,31.131,21.083,30.507,21.248z"></path><path fill="#010101" d="M37.393,27.839c0.231-1.034,0.346-2.095,0.32-3.154c-0.013-0.542-0.066-1.081-0.145-1.618	c-0.036-0.246-0.08-0.491-0.131-0.734c-0.012-0.057-0.069-0.421-0.097-0.424c0.015,0.001-0.162,0.114-0.111,0.123	c0.033,0.006,0.149-0.06,0.184-0.073c0.898-0.331,1.926-0.611,2.857-0.238c0.851,0.341,1.218,1.213,1.422,2.045	c0.286,1.164,0.293,2.384,0.04,3.554c-0.136,0.627,0.828,0.896,0.964,0.266c0.262-1.211,0.285-2.449,0.052-3.667	c-0.207-1.081-0.625-2.191-1.565-2.837c-0.972-0.669-2.251-0.622-3.34-0.316c-0.468,0.132-1.216,0.274-1.444,0.759	c-0.137,0.291-0.033,0.598,0.034,0.893c0.073,0.323,0.135,0.649,0.18,0.977c0.191,1.389,0.122,2.812-0.184,4.179	C36.289,28.2,37.253,28.468,37.393,27.839L37.393,27.839z"></path><path fill="#010101" d="M10.08,19.402c-1.226-0.536-2.423-1.146-3.814-0.873c-1.302,0.256-1.883,1.804-1.406,2.959	c0.266,0.646,0.791,1.156,1.406,1.476c0.715,0.371,1.482,0.396,2.248,0.585c1.253,0.309,2.17,1.639,1.923,2.933	c-0.388,2.028-3.41,0.913-4.445,0.094c-0.5-0.395-1.212,0.308-0.707,0.707c1.191,0.941,2.804,1.54,4.335,1.243	c1.536-0.299,2.076-1.85,1.757-3.251c-0.301-1.326-1.354-2.406-2.678-2.71c-0.784-0.18-1.589-0.185-2.269-0.668	c-0.531-0.377-0.884-1.002-0.688-1.657c0.251-0.838,1.071-0.815,1.805-0.722c0.729,0.092,1.364,0.46,2.027,0.749	C10.159,20.52,10.669,19.659,10.08,19.402L10.08,19.402z"></path>
                    </svg>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="text-gray-700 rounded-md outline-none"
                  onClick={handleMenuMobile}
                >

                <svg className={`w-8 h-8 transition-all ${navbarMobile ? "rotate-0" : "rotate-180"}`}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 21H12C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3H11M11 16L15 12M15 12L11 8M15 12H3" stroke={`${ navbarMobile? "#ffff" : "#ffff" }`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`transition-all flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbarMobile ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-xl text-white hover:text-black py-2 px-6 text-center hover:bg-white">
                    <a href="/about">
                        About
                    </a>
                </li>
                <li className="text-xl text-white hover:text-black py-2 px-6 text-center hover:bg-white">
                  <a href="/product">
                    Product
                  </a>
                </li>
                <li className="text-xl text-white hover:text-black py-2 px-6 text-center hover:bg-white">
                  <a href="/team">
                    Team
                  </a>
                </li>
                <li className="text-xl text-white hover:text-black py-2 px-6 text-center hover:bg-white">
                  <a href="/">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
        

    </>

  )
}

export default Navbar