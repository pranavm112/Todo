import React from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
    
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode=== "dark"}
            />
            <div  className="relative w-12 h-7 sm:w-14 sm:h-8 bg-gray-200 
          peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full 
          peer dark:bg-gray-700 
          after:content-[''] after:absolute after:top-1 after:left-1 
          after:bg-white after:border-gray-300 after:border 
          after:rounded-full after:h-5 after:w-5 sm:after:h-6 sm:after:w-6 
          after:transition-all dark:border-gray-600 
          peer-checked:after:translate-x-5 sm:peer-checked:after:translate-x-6 
          peer-checked:after:border-white peer-checked:bg-blue-600"></div>
            <span className={`ml-3 text-sm font-medium 
                ${themeMode === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                {themeMode === "dark" ? "Dark Mode" : "Light Mode"}
            </span>

        </label>
    );
}