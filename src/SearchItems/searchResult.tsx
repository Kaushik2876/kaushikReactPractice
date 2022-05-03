
const Sresult = (props:any) => {
    const img = `https://source.unsplash.com/400x400/?${props.name}`;
    return(
        <>
        <div>
            <img src={img} alt="search"/>
        </div>
        </>
    )
}
export default Sresult;