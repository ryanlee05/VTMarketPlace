
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <div className = "flex z-5 h-10 w-full bg-red-950 p-12 justify-between items-center hover:cursor-default">
            <div className = "flex flex-row gap-3"> 
                <h1 className = "text-4xl text-white font-semibold font-mono">Virginia Tech Marketplace</h1>
            </div>
            <div className = "text-2xl font-semibold font-mono text-white flex flex-row gap-10 mr-8">
                <Link className = "hover:cursor-default" to = '/'>
                    Home
                </Link>

                <Link className = "hover:cursor-default" to ='/create'>
                    Create
                </Link>

            </div>
        </div>
    )
    


}

export default Navbar