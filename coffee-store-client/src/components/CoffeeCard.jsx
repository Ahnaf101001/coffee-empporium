import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const handleDeleteCoffee = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The Coffee item has been deleted successfully.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex gap-8 m-8">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Category: {category}</p>
                    <p>Chef: {chef}</p>
                    <p>Details: {details}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="join join-vertical gap-4">
                    <button className="btn join-item bg-gray-400">View</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn join-item bg-orange-400">Edit</button>
                    </Link>
                    <button onClick={() => handleDeleteCoffee(_id)} className="btn join-item bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired
};

export default CoffeeCard;
