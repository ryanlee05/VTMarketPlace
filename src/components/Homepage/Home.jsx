import {useState, useEffect} from 'react'
import supabase from '../../Supabase'
import {Link} from 'react-router-dom'
import Card from '../Shared/Card'
import InfoFilter from './InfoFilter'

const Home = () => {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [selectedFilter, setSelectedFilter] = useState('Creation');

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    useEffect(() => {
        async function fetchData() {

            setLoading(true);

            let orderByColumn = ''
            let ascending = false;
            
            switch(selectedFilter) {
                case 'Creation':
                    orderByColumn = 'created_at';
                    ascending = false; // Newest first
                    break;
                case 'Name':
                    orderByColumn = 'title'; // Assuming your column is 'title'
                    ascending = true; // A-Z
                    break;
                case 'Likes':
                    orderByColumn = 'likes';
                    ascending = false; // Highest first
                    break;
                default:
                    orderByColumn = 'created_at';
            }

            const {data, error} = await supabase.from('Items').select('*').order(orderByColumn, {ascending: ascending});

            if (error) {
                console.error("Error fetching data", error);
            }
            else {
                setData(data);
            }

            setLoading(false);
            
        }
        fetchData();
    }, [selectedFilter])

    const handleLikeSuccess = (updatedCard) => {
        setData(prevData =>
            prevData.map(card => {
                // If the IDs match, replace the old card with the new one
                if (card.id === updatedCard.id) {
                    return updatedCard;
                }
                // Otherwise, return the card unchanged
                return card;
            })
        );
    };

    if(loading) return (
        <>
            <InfoFilter
                selected = {selectedFilter}
                onFilterChange = {handleFilterChange}
            />
            <div className = "min-h-[75vh] flex justify-center items-center">
            </div>
        </>
    )


    if (data.length == 0) return (
        <>
            <InfoFilter
                selected = {selectedFilter}
                onFilterChange = {handleFilterChange}
            />
            <div className = "min-h-[75vh] flex justify-center items-center">
                <div className = "flex flex-col justify-center gap-5 items-center">
                    <h1 className = "text-3xl text-black">No Items! Create a post.</h1>
                    <Link to = '/create'>
                        <button className = "bg-black text-lg duration-150 rounded-3xl p-4 text-white hover:bg-black/85">Create</button>
                    </Link>
                    
                </div>
            </div>
        </>
    )

    return (
        <>  
            <InfoFilter
                selected = {selectedFilter}
                onFilterChange = {handleFilterChange}
            />
            <div className = "min-h-[75vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {data.map((card) => (
                        <Card 
                            key = {card.id}
                            title = {card.title}
                            imageURL = {card.image}
                            price = {card.price}
                            likes = {card.likes}
                            id = {card.id}
                            onLikeSuccess = {handleLikeSuccess}
                            creation = {card.created_at}
                        />
                    ))}
                </div>
            </div>
        </>
        
    )

}

export default Home;