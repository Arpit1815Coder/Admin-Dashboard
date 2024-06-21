import { themeChange } from 'theme-change'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import { openRightDrawer } from '../features/common/rightDrawerSlice'
import { RIGHT_DRAWER_TYPES } from '../utils/globalConstantUtil'

function Header() {
  const dispatch = useDispatch()
  const { noOfNotifications, pageTitle } = useSelector(state => state.header)
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    themeChange(false)
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const handleThemeChange = (event) => {
    const newTheme = event.target.value
    setCurrentTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const toggleDarkMode = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setCurrentTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const openNotification = () => {
    dispatch(openRightDrawer({ header: 'Notifications', bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION }))
  }

  const logoutUser = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  return (
    <div className="navbar sticky top-0 bg-base-100 z-10 shadow-md">
      {/* Menu toggle for mobile view or small screen */}
      <div className="flex-1">
        <label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
          <Bars3Icon className="h-5 inline-block w-5" />
        </label>
        <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
      </div>

      <div className="flex-none">
        {/* Multiple theme selection */}
        <select className="select select-sm mr-4" onChange={handleThemeChange} value={currentTheme}>
          <option value="light">Default</option>
          <option value="dark">Dark</option>
          <option value="retro">Retro</option>
          <option value="green">Green</option>
          <option value="grey">Grey</option>
          
          
        </select>

        {/* Light and dark theme toggle */}
        <label className="swap swap-rotate">
          <input type="checkbox" checked={currentTheme === 'dark'} onChange={toggleDarkMode} />
          <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={`swap-on fill-current w-6 h-6`} />
          <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={`swap-off fill-current w-6 h-6`} />
        </label>

        {/* Notification icon */}
        <button className="btn btn-ghost ml-4 btn-circle" onClick={openNotification}>
          <div className="indicator">
            <BellIcon className="h-6 w-6" />
            {noOfNotifications > 0 ? <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null}
          </div>
        </button>

        {/* Profile icon, opening menu on click */}
        <div className="dropdown dropdown-end ml-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="profile" className="w-full h-full object-cover" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <div className="divider mt-0 mb-0"></div>
            <li><a onClick={logoutUser}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
