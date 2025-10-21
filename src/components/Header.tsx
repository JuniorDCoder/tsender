import React from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Github, Send } from 'lucide-react';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-6 border-b border-gray-200 bg-white shadow-sm">
            {/* Left side - Logo and Title */}
            <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-lg">
                    <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">TSender</h1>
                    <p className="text-sm text-gray-500">Cross-chain token transfers</p>
                </div>
            </div>

            {/* Right side - Navigation and Connect button */}
            <div className="flex items-center space-x-6">
                {/* GitHub Link */}
                <a
                    href="https://github.com/JuniorDCoder/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 group"
                >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">GitHub</span>
                </a>

                {/* Connect Button */}
                <div className="flex items-center">
                    <ConnectButton />
                </div>
            </div>
        </header>
    );
};

export default Header;