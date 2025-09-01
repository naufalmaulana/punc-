export default function Home() {
    return(
        <>
            <div className="flex items-center justify-center h-screen w-full">
                <div className="logo mx-auto w-fit">
                    Logo
                </div>
                <div className="card p-5 rounded-3 border-2 border-dashed border-white flex items-center justify-center text-white font-medium text-[20px]">
                    text
                </div>
                <button id="start" className="block w-fit mx-auto mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-[18px] font-bold">
                    Tell Me A Joke!
                </button>
            </div>
        </>
    )
}