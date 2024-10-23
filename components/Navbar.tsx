const Navbar = () => {
    return (
        <div className="flex flex-col">
            <nav className="bg-[#3556AB] h-[15vh] w-full">
                <div className="flex">
                    <div className="flex gap-3 w-full justify-center items-center mx-auto w-[60%]">
                        <div className="w-[15%]">
                            <img src={'/UserAvatar.png'} alt="" />
                        </div>
                        <div className="flex flex-col mx-auto w-[85%] py-3 justify-start items-center">
                            <p className="roboto-light text-white text-sm text-start w-full">Hello, Jhon</p>
                            <p className="roboto-thin italic text-md text-white text-start w-full"><i>What are  your plans <br /> for today?</i></p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;