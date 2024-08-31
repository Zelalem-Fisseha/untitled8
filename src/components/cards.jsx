

// eslint-disable-next-line react/prop-types
export function Cards({cardContents , ...props}) {
    return (
        <div className="cards">
            {{cardContents}.map((item, index) => {
                return (
                    <div key={index } style={{...props.style}}>
                        <div> {item.title} </div>
                        <div>{item.description}{item.count}</div>



                </div>)

            })}
        </div>

    )

}