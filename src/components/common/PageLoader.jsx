import React from 'react'

const PageLoader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-white flex flex-col items-center justify-center">
    <div className="relative mb-8">
      <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-primary to-cyan-500 animate-pulse"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-2xl font-black text-white">TF</div>
      </div>
      
      <div className="absolute -inset-4 border-4 border-primary/30 rounded-3xl animate-ping"></div>
    </div>
    
    <div className="text-center">
      <h3 className="text-xl font-bold text-text-main mb-2">Loading TeamFlow</h3>
      <p className="text-text-muted text-sm mb-6">Preparing your workspace...</p>
      
      <div className="flex justify-center space-x-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
    
    <div className="w-64 bg-gray-200 rounded-full h-1.5 mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-cyan-500 h-full rounded-full animate-progress"></div>
    </div>
    
  </div>
  )
}

export default PageLoader