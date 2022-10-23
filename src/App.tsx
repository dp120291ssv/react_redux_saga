import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increaseCount, decreaseCount, getLatestNews} from "./redux/actions/actionCreator";

// https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-useselector-hook
type StoreProps = {
    counter: {count: number}
}

const App = () => {
    // const store = useSelector(store => store);
    // console.log('store', store)
    const count = useSelector((store: StoreProps)  => store?.counter?.count || 0);
    const dispatch = useDispatch();
    // const [count, setCount] = useState(0)

    const handleIncrease = () => {
        // setCount(count + 1)
        dispatch(increaseCount())
    }

    const handleDecrease = () => {
        // setCount(count - 1)
        dispatch(decreaseCount())
    }

    const handleNews = () => {
        // setCount(count - 1)
        dispatch(getLatestNews())
    }

    return (
        <div>
            <h1>HELLO REDUX-SAGA</h1>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleNews}>Get News</button>
        </div>
    );
};

export default App;