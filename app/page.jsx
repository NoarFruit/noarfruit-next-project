
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            {/* Main Logo/Title Section */}
            <div className="mb-12">
                <h1 className="text-6xl sm:text-8xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    NoarFruit
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            {/* Work in Progress Section */}
            <div className="max-w-2xl mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">
                    🚧 Work in Progress 🚧
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                    We&apos;re working hard to bring you something amazing! Our website is currently under construction, 
                    but we&apos;re excited to share our fresh and delicious fruit experience with you soon.
                </p>
                <p className="text-base text-gray-400">
                    Thank you for your patience while we prepare something special.
                </p>
            </div>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-medium shadow-lg">
                <span className="animate-pulse mr-2">✨</span>
                Coming Soon
                <span className="animate-pulse ml-2">✨</span>
            </div>

            {/* Progress Animation */}
            <div className="mt-12 w-full max-w-md">
                <div className="text-sm text-gray-400 mb-2">Building something fresh...</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
                </div>
            </div>
        </div>
    );
}
