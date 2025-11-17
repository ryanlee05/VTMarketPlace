
const InfoFilter = ({selected, onFilterChange}) => {

    function creation() {
        onFilterChange('Creation');
    }

    function name() {
        onFilterChange('Name');
    }

    function likes() {
        onFilterChange('Likes');
    }

    return (
        <div className = "p-12 bg-black/15 w-full flex flex-col text-center gap-3 hover:cursor-default">
            <h1 className = "font-bold font-mono text-3xl">Buy. Sell. Trade.</h1>
            <h1 className = "text-2xl">Furniture, football tickets, subleasings, and more. All in one place. </h1>

            <div className = "flex flex-row gap-8 mt-10">
                <h1 className = "text-lg font-mono font-bold hover:cursor-default">Filter By: </h1>
                <h1 onClick = {creation} className = {`text-lg hover:cursor-pointer ${selected == 'Creation' ? 'font-bold underline-offset-3 underline' : ''}`}>Creation</h1>
                <h1 onClick = {name} className = {`text-lg hover:cursor-pointer ${selected == 'Name' ? 'font-bold underline-offset-3 underline' : ''}`} >Name</h1>
                <h1 onClick = {likes} className = {`text-lg hover:cursor-pointer ${selected == 'Likes' ? 'font-bold underline-offset-3 underline' : ''}`} >Likes</h1>
            </div>
        </div>
    )
}

export default InfoFilter;