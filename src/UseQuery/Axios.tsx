import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => { 
    const [num , setNum] = useState();
    const [name, setName] =useState();
    const [moves, setMoves] = useState();


    useEffect(()=> {
    const getdata = async () =>{
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            // setNum(res.data.id)
            setName(res.data.name);
            setMoves(res.data.moves.length)
        }
        getdata();
    })

    return (
        <>
            <h2>You Choose {num} value</h2>
            <h2>My name is {name} </h2>
            <h2>My Moves is {moves} </h2>

            <select value={num} onChange={(event : any) =>{
                setNum(event.target.value)
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}

export default Axios;
