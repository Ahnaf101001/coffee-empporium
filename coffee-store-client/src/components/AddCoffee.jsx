import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const addCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(addCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('Coffee Added Successfullyy')
                }
            })
    }

    return (
        <div className="lg:w-[1320px] lg:h-[878px] m-auto flex flex-col gap-[50px]">
            <ToastContainer />
            <section className="mt-[50px]">
                <h3 className="text-3xl">Back to home</h3>
            </section>
            <section className="m-auto p-[70px] flex flex-col gap-[32px] bg-[#F4F3F0]">
                <h1 className="text-6xl text-black text-center">Add Coffee</h1>
                <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddCoffee} className="lg:w-[1096px] m-auto">
                    <div className="flex justify-between">
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Chef" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="mt-[24px] text-center">
                        <button className="btn bg-[#D2B48C] sm:btn-sm md:btn-md lg:btn-lg w-full hover:bg-transparent border-black hover:border-black">Add Coffee</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddCoffee;