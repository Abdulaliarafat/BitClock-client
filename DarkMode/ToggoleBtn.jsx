import React from 'react';
import { useDarkMode } from './ThemeProvider';

const ToggoleBtn = () => {
    const { darkMode, setDarkMode}=useDarkMode()
    return (
        <div className="flex items-center gap-4">
            <label className="flex items-center cursor-pointer ">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    className="toggle toggle-xl bg-white"
                />
                <span className="ml-2 font-bold text-white">{darkMode ? "🌙Dark" : "☀️Light"}</span>
            </label>
        </div>
    );
};

export default ToggoleBtn;