
const Navbar = () => {

    return (
        <div className = "flex z-5 h-10 w-full bg-red-950 p-12 justify-between items-center hover:cursor-default">
            <div className = "flex flex-row gap-3"> 
                <h1 className = "text-2xl text-white font-semibold font-mono">Virginia Tech Marketplace</h1>
            </div>
            <div className = "text-xl font-semibold font-mono text-white flex flex-row gap-10 mr-8">
                <h1>Home</h1>
                <h1>Create</h1>

            </div>
        </div>
    )
    


}

export default Navbar