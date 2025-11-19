import {useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import supabase from '../../Supabase'
import UpdateInfo from './UpdateInfo'


const Update = () => {

    const navigate = useNavigate();

    const {id} = useParams()
    const[loading, setLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const[imageURL, setImageURL] = useState('');

    useEffect(() => {
        if (id) {
            async function fetchItem() {
                setLoading(true);
                const { data, error } = await supabase
                    .from('Items')
                    .select('*')
                    .eq('id', parseInt(id))
                    .single(); 

                if (error) {
                    console.error('Error fetching item:', error);
                } else {
                    setLoading(false);
                    setTitle(data.title);
                    setPrice(data.price);
                    setDescription(data.description)
                    setImageURL(data.image);
                }
                
            }
            fetchItem();
        }
    }, [id]);



    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);

        const newItem = {
            title: title,
            price: parseFloat(price),
            description: description,
            image: imageURL, 
            likes: 0, 
        };

        const {error} = await supabase.from('Items').update([newItem]).eq('id', id).select();

        if (error) {
            console.error("Error inserting item. ", error)
            alert("not working")
        }
        else {
            setTitle('');
            setPrice('');
            setDescription('');
            setImageURL('');

        }
        setLoading(false);
        navigate('/');

    }

    return (
        <>
        <UpdateInfo/>
        <div className = "flex w-full mt-10 bg-white items-center justify-center">
            <form onSubmit = {handleSubmit} className = "w-[30vw] p-5 flex flex-col border-2 rounded-2xl gap-5 mb-10 bg-black/15">
                <div className = "flex flex-row gap-5 ">
                    <h1 className = "font-semibold font-mono">Title: </h1>
                    <input
                        className = "bg-white rounded-xl w-full"
                        type = "text"
                        value = {title}
                        onChange = {(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className = "flex flex-row gap-5">
                    <h1 className = "font-semibold font-mono">Price:</h1>
                    <input 
                        className = "bg-white rounded-xl w-full"
                        type = "number"
                        value = {price}
                        onChange = {(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className = "flex flex-row gap-5">
                    <h1 className = "font-semibold font-mono">Image URL:</h1>
                    <input 
                        className = "bg-white rounded-xl w-full"
                        type = "text"
                        value = {imageURL}
                        onChange = {(e) => setImageURL(e.target.value)}
                        required
                    />
                </div>
                <div className = "flex flex-col gap-2">
                    <h1 className = "font-semibold font-mono">Description:</h1>
                    <textarea
                        className = "bg-white rounded-xl h-24 p-2 resize-none" 
                        value = {description}
                        onChange = {(e) => setDescription(e.target.value)}
                        rows={4} 
                        required
                    />
                </div>
                <button type = "submit" className = {`bg-black px-5 py-3 rounded-3xl text-white ${loading == true ? 'opacity-50 pointer-events-none' : '' }`}>Finish Post</button>
            </form>
        </div>
        </>
        

    )

}

export default Update;