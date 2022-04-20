import Layout from 'Container/GlobalLayout/GlobalLayout';
import { useDispatch , useSelector} from 'react-redux';
import { decrement, increaseAmount, increment } from './slices/counterSlices';

const Redux = ()=> {

    const dispatch = useDispatch();
    const {counter} = useSelector((state:{counter:any}) => state?.counter);
    
    return(
        <Layout>
        <div className="counter">
            <h1>Redux Toolkit Counter </h1>
            <h2> Counter: {counter}</h2>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <button onClick={()=> dispatch(increaseAmount(5))}>IncreaseAmount</button>
        </div>
        </Layout>
    )
}

export default Redux;