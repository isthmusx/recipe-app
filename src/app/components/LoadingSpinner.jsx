import React from 'react'

const LoadingSpinner = () => {
    return (
      <div className="fixed inset-0 bg-secondary opacity-50 z-50 flex justify-center items-center rounded-lg">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
      </div>
    );
  };

export default LoadingSpinner