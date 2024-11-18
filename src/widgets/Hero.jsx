import React from "react";

function Hero() {
    return (
        <div className="grid justify-items-center gap-8 pd-28 relative">
            <p className="text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal">
                打造一个完美的、现象级的、充满创造力的网站
            </p>
            <p className="text-xl text-gray-700 md:w-1/2 text-center">
                这是一个完美的工具，他的功能非常强大我们都很喜欢他.
                这是一个完美的工具，他的功能非常强大我们都很喜欢他.我们都很喜欢他.
            </p>
            <div>
                <button className="rounded bg-blue-500 text-base text-white py-3 px-8">立即试用</button>
                <button className="ml-3 rounded bg-gray-900 text-base text-white py-3 px-8">了解更多</button>
            </div>
        </div>
    )
}

export default Hero;