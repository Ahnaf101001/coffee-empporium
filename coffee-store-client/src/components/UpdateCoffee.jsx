import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateCoffee = () => {

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast('Coffee Updated Successfully')
                }
            })
    }

    const coffee = useLoaderData();

    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;


    return (
        <div>
            <ToastContainer />
            <section className="m-auto p-[70px] flex flex-col gap-[32px] bg-[#F4F3F0]">
                <h1 className="text-6xl text-black text-center">Edit Coffee</h1>
                <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleUpdateCoffee} className="lg:w-[1096px] m-auto">
                    <div className="flex justify-between">
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name="chef" defaultValue={chef} placeholder='chef' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder='supplier' className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" defaultValue={taste} placeholder='taste' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" defaultValue={category} placeholder='category' className="input input-bordered" required />
                        </div>
                        <div className="form-control lg:w-[536px]">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" defaultValue={details} placeholder='details' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder='photo URL' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="mt-[24px] text-center">
                        <button className="btn bg-[#D2B48C] sm:btn-sm md:btn-md lg:btn-lg w-full hover:bg-transparent border-black hover:border-black">Update Coffee</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateCoffee;