import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(newCoffee)

        // create post - 02
        // send data to the server
        fetch('http://localhost:2000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // alert('New Coffee added successfully.')
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added coffee successfully.',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
        })


    }
    return (
        <form onSubmit={handleSubmit}
            className="max-w-[1240px] mx-auto bg-orange-300 rounded-xl p-4">

            {/* row 1 */}
            <div className="max-w-[800px] mx-auto ">
                <h2 className="text-4xl text-center text-black font-extrabold my-8">Add Coffee</h2>
                <div >
                    <div className="flex gap-2">
                        <div className="w-full">
                            <h2> Coffee name</h2>
                            <input type="text" name="name" placeholder="Enter your coffee name" id="" className="border border-red-600 p-2 w-full" />

                        </div>
                        <div className="w-full">
                            <h2>Available Quantity</h2>
                            <input type="text" name="quantity" placeholder="Enter your coffee quantity" id="" className="border border-red-600 p-2 w-full" />
                        </div>

                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="max-w-[800px] mx-auto ">
                <div >
                    <div className="flex gap-2">
                        <div className="w-full">
                            <h2>Supplier</h2>
                            <input type="text" name="supplier" placeholder="Enter your coffee supplier" id="" className="border border-red-600 p-2 w-full" />

                        </div>
                        <div className="w-full">
                            <h2>Coffee Taste</h2>
                            <input type="text" name="taste" placeholder="Enter your coffee taste" id="" className="border border-red-600 p-2 w-full" />
                        </div>

                    </div>
                </div>
            </div>

            {/* row 3 */}
            <div className="max-w-[800px] mx-auto ">
                <div >
                    <div className="flex gap-2">
                        <div className="w-full">
                            <h2>Category</h2>
                            <input type="text" name="category" placeholder="Enter your coffee category" id="" className="border border-red-600 p-2 w-full" />

                        </div>
                        <div className="w-full">
                            <h2>Details</h2>
                            <input type="text" name="details" placeholder="Enter your coffee details" id="" className="border border-red-600 p-2 w-full" />
                        </div>

                    </div>
                </div>
            </div>

            {/* row 4 */}
            <div className="max-w-[800px] mx-auto ">
                <div >
                    <div className="w-full">
                        <div className="w-full">
                            <h2>Photo URL</h2>
                            <input type="text" name="photo" placeholder="Enter your coffee photo url" id="" className="border border-red-600 p-2 w-full" />

                        </div>
                       

                    </div>

                </div>
            </div>

            <div className="max-w-[800px] mt-2 mb-8 mx-auto ">
                <input className="btn btn-block" type="submit" value="Add Coffee" />
            </div>

        </form>
    );
};

export default AddCoffee;