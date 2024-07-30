export default function Navbar() {
    return(
        <nav>
            <div className="container mx-auto flex justify-between p-10  h-[80px] bg-[#071952]">
                <div className="self-center ">
                    <p className="text-white font-medium text-3xl">Weather App</p>
                </div>
                <div className="flex self-center">
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Home</a>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">About</a>
                    <a href="#" className="px-4 text-base font-medium leading-6 text-white tracking-[0.2px]">Contact</a>
                </div> 
            </div>
        </nav>
    );
}