
export function Cards({cardContents , ...props}) {
    return (
        <div className="cards">
            {cardContents.map((item, index) => {
                return (
                    <div key={index } style={{...props.style}}>
                        <div className="card-content" style={{margin:"20px",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"space-between"




                        }}>
                            <div style={{justifyContent:"space-between"}}>
                                {item.title} </div>
                            <div
                                style={{}}>
                                {item.description}
                                {item.count}</div>
                        </div>


                    </div>)

            })}
        </div>

    )

}