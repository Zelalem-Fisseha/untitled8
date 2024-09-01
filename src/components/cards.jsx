
export function Cards({cardContents , ...props}) {
    return (
        <div className="cards">
            {cardContents.map((item, index) => {
                return (
                     <div key={index } style={{...props.style}}>
                        <div className="card-content" style={{border:"1px solid black",
                            borderRadius:"5px",
                            padding:"15px",
                            width:"190px",
                            boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.14)",
                            marginLeft:"35px",
                            marginTop:"85px",
                            height:"fit-content",










                        }}>


                            <div style={{fontSize:"18px",
                                color:"gray",
                                marginBottom:"10px",
                                marginLeft:"7px",



                            }}>
                                {item.title} </div>
                            <div
                                style={{display:"flex",
                                    alignItems:"center",
                                    // flexDirection:"row",
                                    gap:"15px",
                                    marginLeft:"10px",


                                }}>
                                <div style={{
                                    fontSize:"35px",
                                    fontWeight:"bold",
                                }}>
                                    {item.count} </div>
                                <div
                                style={{fontWeight:"bold",}}>
                                    {item.description}</div>
                            </div>


                        </div>

                     </div>)

            })}
        </div>

    )

}