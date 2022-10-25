import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increaseCount, decreaseCount, getLatestNews} from "./redux/actions/actionCreator";
import store from "./redux/store";
import News from "./components/news/news";

// https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-useselector-hook
type StoreProps = {
    counter: {count: number}
}

const App = () => {
    // @ts-ignore
    const latestNews = useSelector(store => store?.news?.latestNews || [])
    // @ts-ignore
    const popularNews = useSelector(store => store?.news?.popularNews || [])
    const dispatch = useDispatch();

    // const store = useSelector(store => store);
    // console.log('store', store)
    const count = useSelector((store: StoreProps)  => store?.counter?.count || 0);
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
        <>
        <div>
            <h1>HELLO REDUX-SAGA</h1>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
            <div>
                <hr/>
                <button onClick={handleNews}>Get News</button>
                <News news={latestNews} title="Latest News" />
                <News news={popularNews} title="Popular News" />
            </div>
        </>
    );
};

export default App;