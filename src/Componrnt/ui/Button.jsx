import React from 'react';

const Button = ({ children, variant = 'primary',  className = '', ...props }) => {

    const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600  px-8 py-3",
        outline: "border border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 bg-transparent cursor-pointer",
        ghost: "text-gray-400 hover:text-white hover:bg-white/5",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]}  ${className} `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;