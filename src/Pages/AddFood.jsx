import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Lottie from 'lottie-react';
import LottieAnimation from '../../src/assets/food.json';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';


const AddFood = () => {
    const { user } = use(AuthContext)
    const navigate = useNavigate()
    const handleAddFood = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const newFormData = Object.fromEntries(formData.entries())
        console.log(newFormData)
        //Axios post in database
        axios.post('https://bitclock-server.vercel.app/food', newFormData)
            .then(res => {
                console.log(res.data.insertedId)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your food has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                    navigate('/myItem')
                }
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: "center",
                    icon: 'error',
                    title: "Please try again",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }
    return (
        <div>
                <div className='max-w-5xl mx-auto px-10 md:px-24 py-5  bg-gradient-to-b from-yellow-500 to-yellow-100 rounded-2xl shadow-2xl my-5'>
                    <div className='flex justify-center items-center md:px-10  mx-auto space-y-4'>
                        <Lottie animationData={LottieAnimation} className='h-25 w-35'></Lottie>
                        <h1 className='font-bold text-white text-4xl text-balance mb-3'>Add your food</h1>
                    </div>
                    <form onSubmit={handleAddFood} className='md:px-4 py-2' >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-100 border-base-300 rounded-box  border p-4">
                                <label className="label font-bold">Food Title
                                </label>
                                <input type="text" name='foodtitle' className="input w-full " placeholder="Food Title" required />
                            </fieldset>
                            <fieldset className="fieldset bg-gradient-to-l from-green-50 to-green-100 border-base-300 rounded-box border p-4">
                                <label className="label font-bold">Food Category</label>
                                <select name="foodcategory" className="select w-full" required>
                                    <option value="">Select Food Category</option>
                                    <option value="Dairy">🐄Dairy</option>
                                    <option value="Meat">🥩Meat</option>
                                    <option value="Vegetables">🥦Vegetables</option>
                                    <option value="Snacks">🍩Snacks</option>
                                    <option value="Bakery">🍞Bakery</option>
                                    <option value="Seafood">🐟Seafood</option>
                                    <option value="Fruits">🍎Fruits</option>
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
                        <input type="submit" className='btn  w-full  bg-gradient-to-r from-green-500 to-green-700 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-900 mt-4' value="Create group" />
                    </form>
                </div>
        </div>
    );
};

export default AddFood;