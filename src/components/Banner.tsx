import Logo from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section id="home" className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Side */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                        Build Your Ideal
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg leading-7 mb-6 max-w-xl">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href=""
                            className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 text-white font-medium px-6 py-3 rounded-lg transition duration-300">
                            Explore Technologies
                        </a>
                        <a
                            href=""
                            className="border border-gray-300 text-gray-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition duration-300">
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={Logo}
                        alt=""
                        className="w-full max-w-md object-contain" />
                </div>

            </div>
        </section>
    );
};

export default Banner;