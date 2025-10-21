import React from 'react';

interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    type?: 'text' | 'number' | 'email' | 'password' | 'url' | 'tel';
    large?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   placeholder,
                                                   value,
                                                   type = 'text',
                                                   large = false,
                                                   onChange,
                                                   disabled = false,
                                                   error = '',
                                                   helperText = '',
                                                   required = false,
                                               }) => {
    const baseStyles = `
    w-full px-4 py-3 
    border rounded-lg 
    bg-white 
    text-gray-900 
    placeholder-gray-500 
    transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
  `;

    const errorStyles = `
    border-red-500 
    focus:ring-red-500
  `;

    const normalStyles = `
    border-gray-300 
    hover:border-gray-400
  `;

    return (
        <div className="w-full">
            {/* Label */}
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            {/* Input Field */}
            {large ? (
                <textarea
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    rows={4}
                    className={`
            ${baseStyles}
            ${error ? errorStyles : normalStyles}
            resize-vertical
            min-h-[100px]
          `}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    className={`
            ${baseStyles}
            ${error ? errorStyles : normalStyles}
          `}
                />
            )}

            {/* Helper Text and Error Message */}
            <div className="mt-1 min-h-[20px]">
                {error && (
                    <p className="text-sm text-red-600">{error}</p>
                )}
                {!error && helperText && (
                    <p className="text-sm text-gray-500">{helperText}</p>
                )}
            </div>
        </div>
    );
};

export default InputField;