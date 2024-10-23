import Trophy from "@/icons/Trophy";

const GoPro = () => {
    return (
        <>
            <div className="bg-[#9EB031] h-[15vh] w-full flex justify-center">
                <div className="w-1/5 flex items-center justify-center">
                    <Trophy />
                </div>
                <div className="w-3/5 flex items-center justify-center text-[#071D55] font-semibold">Go Pro Upgrade Now</div>
                <div className="w-1/5 flex items-start justify-center">
                    <div className="w-[60%] flex items-center justify-center bg-[#071D55] text-[#F2C94C] h-[60%]">$1</div>
                </div>
            </div>
        </>
    )
}

export default GoPro;