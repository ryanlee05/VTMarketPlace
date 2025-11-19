import {useState} from 'react'
import supabase from '../../Supabase'


const Customize = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const[imageURL, setImageURL] = useState('');
    
    const[loading, setLoading] = useState(false);


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

        const {error} = await supabase.from('Items').insert([newItem]).select();

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

    }

    return (
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
                <button type = "submit" className = {`bg-black px-5 py-3 rounded-3xl text-white ${loading == true ? 'opacity-50 pointer-events-none' : '' }`}>Create Post</button>
            </form>
        </div>

    )

}

export default Customize;