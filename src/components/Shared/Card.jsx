import supabase from '../../Supabase'
import {Link} from 'react-router-dom'

const Card = ({title, imageURL, likes, id, onLikeSuccess, creation}) => {

    async function updateLikes() {
        const newLikesCount = likes + 1;

        const { data, error } = await supabase
            .from('Items')
            .update({ likes: newLikesCount }) 
            .eq('id', id)
            .select();

        if (error) {
            console.error('Error updating likes:', error);
        } else if (data && data.length > 0) {
           
            onLikeSuccess(data[0]); 
        }
    }

    function createSlug(title) {
    if (!title) return '';
    return title
        .toLowerCase()
        .replace(/\s+/g, '-') 
        .replace(/[^a-z0-9-]/g, '') 
        .replace(/--+/g, '-') 
        .replace(/^-+|-+$/g, ''); 
    }

    return (
        <div className = "w-80 border-2 bg-black/15 rounded-3xl overflow-hidden shadow-xl">
            <div className = "relative group">
                <img className = "w-full h-auto"src = {imageURL}/>
                <svg onClick = {updateLikes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="maroon" className="absolute top-2 right-2 size-7 hover:cursor-pointer">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
            </div>
            <Link 
                key = {id}
                to = {`/item/${id}/${createSlug(title)}`}
            >
                <h1 className = "mt-5 ml-2 font-bold text-2xl font-mono">{title}</h1>
            <div className = "mt-5 ml-2 text-lg"><b>Created on:</b> {creation.slice(0,10)}</div>
            <div className = "flex flex-row gap-5 items-center">
                <h1 className = "mt-5 mb-5 ml-2 text-lg">{likes} Likes</h1>
            </div>
            </Link>
            
        </div>
    );
}

export default Card;