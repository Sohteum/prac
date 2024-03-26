const Controller=({onClickChange})=>{
    return(
        <div>
            <button onClick={()=>{
            onClickChange(-1)}
            }>-1</button>
            <button onClick={()=>{
            onClickChange(-10)}
            }>-10</button>
            <button onClick={()=>{
            onClickChange(-100)}
            }>-100</button>
            <button onClick={()=>{
            onClickChange(+100)}
            }>+100</button>
            <button onClick={()=>{
            onClickChange(+10)}
            }>+10</button>
            <button onClick={()=>{
            onClickChange(+1)}
            }>+1</button>
        </div>
    )
}

export default Controller;