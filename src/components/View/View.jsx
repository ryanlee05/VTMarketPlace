import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import supabase from '../../Supabase';

const View = () => {

    const params = useParams();

    const {id} = params;
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const [comment, setComment] = useState('');

    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        console.log(params);
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
                    setItem(null);
                } else {
                    setItem(data);
                }
                setLoading(false);
            }
            fetchItem();
        }
    }, [id]);

    async function addComment(e) {
        e.preventDefault();

        const {error} = await supabase.from('Comments').insert([
            {
                content: comment,
                item_id: item.id
            }
        ]).select();

        if (error) {
            alert('failed to insert comment');
        }
        else {
            setAllComments([...allComments, comment])
            setComment('');
        }
    }

    useEffect(() => {
        async function grabComments() {

            if (!item?.id) return;

            const {data, error} = await supabase.from('Comments').select('content').eq('item_id', item.id).order('created_at', {ascending: true});
            
            if (error) {
                alert('failed pulling data from table');
            }
            else {
                setAllComments(data)
            }
        }

        grabComments()
    }, [allComments, item])

    async function deleteItem() {
        const {error} = await supabase.from('Items').delete().eq('id', id).select()

        if (error) {
            alert('had trouble removing item');
            return false;
        }

        const {newError} = await supabase.from('Comments').delete().eq('item_id', id).select();

        if(newError) {
            alert('had trouble removing comments');
            return false;
        }

        return true;
    }


    if(loading) return (
        <div className = "min-h-[70vh]">

        </div>
    )

    if (item && !loading)  return (
        <div className = "flex flex-row gap-10 justify-center">
            <div className = "min-h-[70vh] flex flex-col justify-center items-center p-5">
                <div className = "bg-black/15 p-5 flex flex-row max-w-120 rounded-2xl gap-3 shadow-2xl">
                    <div className = "flex flex-col">
                        <img 
                        src = {item.image}
                        className = "w-65 h-auto rounded-2xl"
                        />
                        <h1 className = "font-mono font-bold text-2xl">{item.title}</h1>
                        <h1 className = "text-xl"><b>Price: </b>${item.price}</h1>
                        <h1>Likes: {item.likes}</h1>
                    </div>
                    <div clasName = "flex flex-col">
                        <h1><b>Description: </b>{item.description}</h1>
                    </div>
                </div>
                <div className = "mt-5 flex flex-row gap-10">
                    <Link to = {'/'}>
                    <button onClick = {deleteItem} className = "bg-black text-white px-5  duration-150 py-3 rounded-2xl shadow-2xl hover:bg-black/85">Delete Post</button>
                    </Link>
                    <button className = "bg-black text-white px-5  duration-150 py-3 rounded-2xl shadow-2xl hover:bg-black/85">Edit Post</button>
                </div>
            </div>
            <div className = "flex flex-col p-5">
                <div className = "h-[60vh] bg-black/15 w-[30vw] flex flex-col text-center rounded-t-xl overflow-y-scroll shadow-2xl">
                    <h1 className = "font-mono font-bold text-2xl mt-5 ">Comments</h1>
                    <div className = "mt-5 text-right mr-3">
                        {allComments.map((comment) => (
                            <h1 className = "text-xl mt-3 text-black">* {comment.content}</h1>
                        ))}
                    </div>
                </div>
                <div className = "h-[10vh] bg-black/20 w-[30vw] rounded-b-xl flex flex-row items-center">
                    <form onSubmit = {addComment}>
                    <input 
                        className = "bg-white ml-5 w-[20vw] rounded-xl"
                        value = {comment}
                        onChange = {(e) => setComment(e.target.value)}
                    />
                     <button type = "submit" className = "bg-black text-white px-3 py-2 duration-150 rounded-2xl ml-5 hover:bg-black/80">Post</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default View;