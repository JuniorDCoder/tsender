"use client"

import React, {useState} from 'react';
import InputField from "@/components/ui/InputField";

const AirdropForm = () => {
    const [tokenAddress, setTokenAddress] = useState('');
    const [recipients, setRecipients] = useState('');
    const [amounts, setAmounts] = useState('');

    async function handleSubmit() {}
    return (
        <div className="p-4 border-2 border-blue-600 rounded-lg m-4">
            <InputField
                label="Token Address"
                placeholder="0x..."
                value={tokenAddress}
                onChange={e => setTokenAddress(e.target.value)}
            />

            <InputField
                label="Recipients (comma or new line separated)"
                placeholder="0x123..., 0x456..."
                value={recipients}
                large={true}
                onChange={(e) => setRecipients(e.target.value)}
            />

            <InputField
                label="Amounts (comma or new line separated)"
                placeholder="100, 200"
                value={amounts}
                large={true}
                onChange={(e) => setAmounts(e.target.value)}
            />

            <button
                onClick={handleSubmit}
                className="px-4 py-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                Send Tokens
            </button>
        </div>
    );
};

export default AirdropForm;