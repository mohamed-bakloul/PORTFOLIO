export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-12 w-12 rounded-full border-t-8 border-b-8 border-purple-500 animate-spin animation-delay-150"></div>
                </div>
            </div>
        </div>
    )
}