import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Items = ({ MyItemsPromise }) => {
    const { user } = use(AuthContext)
    const MyFoods = use(MyItemsPromise)
    console.log(MyFoods)
    const handleUpdateFood = (e) => {
        e.preventDefault()
    }
    const handleDeleteItems = () => {

    }
    return (
        <div className='max-w-5xl mx-auto shadow-2xl bg-gradient-to-t from-yellow-50 to-green-100'>
            <div className="overflow-x-auto my-10 shadow-2xl p-4 rounded-xl">
                <table className="min-w-full table-auto md:table">
                    <thead className="hidden md:table-header-group">
                        <tr>
                            <th>Items no</th>
                            <th >Foods</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Expirydate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MyFoods.map((Food, index) => (
                            <tr
                                key={Food?._id}
                                className="block md:table-row mb-4 border border-gray-200 rounded-md md:border-0 md:rounded-none"
                            >
                                <td className="block md:table-cell p-2">
                                    <span className="md:hidden font-bold">Items no : </span>
                                    {index + 1}
                                </td>
                                <td className="block md:table-cell p-2">
                                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                                        <img
                                            className="rounded-xl w-full md:w-40 h-40 object-cover"
                                            src={Food?.photoURL}
                                            alt="Place"
                                        />
                                        <div className="text-sm text-gray-700">
                                            <span className="font-bold">Description :</span> {Food?.description}
                                        </div>
                                    </div>
                                </td>
                                <td className="block md:table-cell p-2">
                                    <span className="md:hidden font-bold">Category: </span>
                                    {Food?.foodcategory}
                                </td>
                                <td className="block md:table-cell p-2">
                                    <span className="md:hidden font-bold">Quantity: </span>
                                    {Food?.quantity}
                                </td>
                                <td className="block md:table-cell p-2">
                                    <span className="md:hidden font-bold">Expirydate: </span>
                                    {Food?.expirydate}
                                </td>
                                <td className="block md:table-cell p-2 space-y-2 md:space-y-1">
                                    <button onClick={() => document.getElementById('my_modal_4').showModal()} className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white btn btn-sm md:btn-md rounded-xl hover:rounded-md">
                                        Update
                                    </button>
                                    <button onClick={() => { handleDeleteItems(Food?._id) }} className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white btn btn-sm md:btn-md rounded-xl hover:rounded-md px-5">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* modale for update Food item */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl  bg-gradient-to-t from-yellow-100 to-green-200">
                    <h1 className='font-bold text-green-400 text-4xl text-center mb-8'>Update your food</h1>
                    <form onSubmit={handleUpdateFood} className='md:px-4 py-2' >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-100 border-base-300 rounded-box  border p-4">
                                <label className="label font-bold">Food Title
                                </label>
                                <input type="text" name='foodtitle' className="input w-full " placeholder="Food Title" required />
                            </fieldset>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-100 border-base-300 rounded-box border p-4">
                                <label className="label font-bold">Food Category</label>
                                <select name="foodcategory" className="select w-full" required>
                                    <option value="">Select Food Category</option>
                                    <option value="Dairy">🐄 Dairy </option>
                                    <option value="Meat">🥩 Meat</option>
                                    <option value="Vegetables">🥦 Vegetables </option>
                                    <option value="Snacks">🍩 Snacks</option>
                                    <option value="Bakery">🍞 Bakery
                                    </option>
                                    <option value="Seafood">🐟 Seafood
                                    </option>
                                    <option value="Fruits">🍎 Fruits</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-100 border-base-300 rounded-box  border p-4">
                                <label className="label font-bold">Quantity
                                </label>
                                <input type="text" name='quantity' className="input w-full " placeholder="Enter Quantity" required />
                            </fieldset>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-100 border-base-300 rounded-box  border p-4">
                                <label className="label font-bold">Added Date
                                </label>
                                <input type="date"
                                    name='addeddate'
                                    className="input w-full "
                                    placeholder="Enter Added Date"
                                    value={new Date().toISOString().split('T')[0]}
                                    readOnly
                                    required />
                            </fieldset>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-100 border-base-300 rounded-box  border p-4">
                                <label className="label font-bold">Expiry Date</label>
                                <input type="date" name='expirydate' className="input w-full " placeholder="Enter Expiry Date" required />
                            </fieldset>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-100 border-base-300 rounded-box  border p-4">
                                <label className="label font-bold">Image URL
                                </label>
                                <input type="text" name='photoURL' className="input w-full " placeholder="Enter Image URL" required />
                            </fieldset>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-200 border-base-300 rounded-box  border p-4 ">
                                <label className="label font-bold">User Email</label>
                                <input type="text" name='email' defaultValue={user?.email} className="input w-full font-semibold bg-gray-200 mt-3" placeholder="Enter User Email" required readOnly />
                            </fieldset>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-100 border-base-300 rounded-box  border p-4 ">
                                <label className="label  font-bold">Description</label>
                                <input type="text" name='description' className="input w-full h-20" placeholder="Write your description here" required />
                            </fieldset>
                        </div>
                        <input type="submit" className='btn  w-full  bg-gradient-to-r from-green-500 to-green-700 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-900 mt-4' value="Update group" />
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-md w-50 mr-16          md:w-2xl md:mr-35 mb-3 bg-gradient-to-r from-green-500 to-green-700 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default Items;