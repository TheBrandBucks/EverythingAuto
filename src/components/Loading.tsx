import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-top min-h-[800px] mx-auto max-w-7xl px-5 pb-10 mt-14">
        <div className="w-14 h-14 border-8 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    );
};

export default Loading;
