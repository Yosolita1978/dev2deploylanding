import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100 mt-6">
            <p className="text-center text-gray-800 font-medium mb-2">
                Spaces are limited and enrollment closes soon.
            </p>
            <p className="text-center text-gray-700 mb-3">
                Don't miss this chance to showcase a professional-grade project employers will notice.
            </p>
            <p className="text-center font-bold text-lg text-purple-700">
                Sign up today and finally bridge the gap from Dev to Deploy!
            </p>
        </div>
    );
};

export default Footer;