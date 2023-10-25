import Card from './Card';
function Tours({tours,RemoveTour}){
    return(
        <div className="container">
            <div className="title">Plan With Love</div>
            <div className="cards">
                {
                    tours.map((tour) =>{
                    return <Card {...tour} RemoveTour={RemoveTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;