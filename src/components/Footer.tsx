import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <footer className="bg-white border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={Logo} alt="" />
                        </div>
                        <p className="text-sm text-gray-500 max-w-xs">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="flex gap-4 mt-5">
                            <a
                                href=""
                                className="text-sm text-[#475569] hover:text-pink-500">
                                GitHub
                            </a>

                            <a
                                href=""
                                className="text-sm text-[#475569] hover:text-pink-500">
                                Twitter
                            </a>

                            <a
                                href=""
                                className="text-sm text-[#475569] hover:text-pink-500">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm text-[#0F172A] mb-4">
                            Product
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a href="" className="text-sm text-[#64748B]  hover:text-pink-500">
                                Home
                            </a>

                            <a href="" className="text-sm text-[#64748B] hover:text-pink-500">
                                Technologies
                            </a>

                            <a href="" className="text-sm text-[#64748B] hover:text-pink-500">
                                Projects
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm text-[#0F172A] mb-4">
                            Company
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a href="" className="text-sm text-[#64748B] hover:text-pink-500">
                                About
                            </a>

                            <a href="" className="text-sm text-[#64748B] hover:text-pink-500">
                                Contact
                            </a>

                            <a href="" className="text-sm text-[#64748B] hover:text-pink-500">
                                Careers
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm text-[#0F172A] mb-4">
                            Legal
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a
                                href=""
                                className="text-sm text-[#64748B] hover:text-pink-500">
                                Privacy Policy
                            </a>

                            <a
                                href=""
                                className="text-sm text-[#64748B] hover:text-pink-500">
                                Terms of Service
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className=" border-gray-200">

                <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

                    <p className="text-sm text-[#64748B] text-center sm:text-left">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a
                            href=""
                            className="text-sm text-[#64748B] hover:text-pink-500">
                            Privacy
                        </a>

                        <a
                            href=""
                            className="text-sm text-[#64748B] hover:text-pink-500">
                            Terms
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;