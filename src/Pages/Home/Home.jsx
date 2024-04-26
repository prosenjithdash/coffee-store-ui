import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../Components/CoffeeCard/CoffeeCard";

const Home = () => {

    const coffee = useLoaderData();
    console.log(coffee)

    return (
        <div className="max-w-[1240px] mx-auto">
            <h2> Coffee : {coffee.length}</h2>
            <div className="grid grid-cols-2 gap-[24px] my-20">
                {
                    coffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;