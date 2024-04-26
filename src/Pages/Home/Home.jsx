import { useLoaderData } from "react-router-dom";

const Home = () => {

    const coffee = useLoaderData();
    console.log(coffee)

    return (
        <div>
            <h2> Coffee : { coffee.length}</h2>
        </div>
    );
};

export default Home;