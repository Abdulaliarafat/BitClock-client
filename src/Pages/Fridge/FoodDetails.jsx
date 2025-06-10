import axios from 'axios';
import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ExpirationCount from '../../Hooks/ExpirationCount';

const FoodDetails = () => {
    const { user } = use(AuthContext)
    const foods = useLoaderData();
    const { _id, photoURL, noteData, foodtitle, foodcategory, expirydate, quantity, description, } = foods
    // btn css work and status toggole
    const expirydates = new Date(expirydate)
    const today = new Date()
    const expirations = expirydates < today
    // add note handelar...
    const handleNote = (e) => {
        e.preventDefault();
        const form = e.target;
        const note = form.note?.value;
        const date = form.date?.value;
        console.log(note, date)
        // patch..
        axios.patch(`http://localhost:3000/food/${_id}`, { note, date })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Note added",
                        showConfirmButton: false,
                        timer: 1800
                    });
                    form.reset()
                }

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className={` max-w-xl md:mx-auto mx-2 border my-10 md:p-4 rounded-2xl  ${expirations ? 'border-4 border-red-700 bg-gradient-to-b from-white to-red-100' : "border-3 border-amber-400 bg-gradient-to-b from-white to-yellow-100"}`}>
            <div>
                <img className='w-70 mx-auto' src={photoURL} alt="" />
            </div>
            <div className=' px-10 pt-3 space-y-2'>
                <p className='font-bold text-lg '>Food : {foodtitle}</p>
                <p className='font-bold text-md'>Category : {foodcategory}</p>
                <p className='font-medium text-md text-gray-600'>Quantity : {quantity}</p>
                <div className='md:flex gap-3'>
                    <p className='font-medium text-md text-gray-600'>Expiry : {expirydate}
                    </p>
                    <p><ExpirationCount expirydate={expirydate}></ExpirationCount></p>
                </div>
                <p className='font-medium text-md text-gray-600'>Description : {description}</p>
                <p className='font-medium text-md text-gray-600'>Status :{expirations ? <span className='text-xs ml-2 text-white px-3 py-1.5 rounded-2xl font-bold bg-red-600'>Expired</span> : <span className='text-xs ml-2 text-white px-3 py-1.5 rounded-2xl font-bold bg-yellow-600'>Nearly</span>}</p>
                <p className='font-medium text-md text-gray-600'>Description : {description}</p>
                {user &&
                    <div>
                        <p className='font-medium text-md text-gray-600'><span className='font-bold text-md'>Note :</span> {noteData?.note}</p>
                        <p className='font-medium text-md text-gray-600'><span className='font-bold text-md'>Note date :</span> {noteData?.date}</p>
                    </div>
                }

            </div>
            <div className='px-6 my-2'>
                <form onSubmit={handleNote}>
                    <fieldset className="fieldset md:w-md border px-4 pt-2 pb-4 rounded-xl border-gray-300 my-3 ">
                        <label className="label  font-bold text-md"> Write note here</label>
                        <input type="text" name='note' className="input md:w-md h-15" placeholder=" Writing text note here" required />
                    </fieldset>
                    <fieldset className="fieldset md:w-md border px-4 pt-2 pb-4 rounded-xl border-gray-300 my-3">
                        <label className="label  font-bold text-md">Added Date
                        </label>
                        <input type="date"
                            name='date'
                            className="input md:w-md h-8 bg-gray-100 font-semibold"
                            placeholder="Enter Added Date"
                            value={new Date().toISOString().split('T')[0]}
                            readOnly
                            required />
                    </fieldset>
                    {
                        user ? <button type='submit' className={` ${expirations ? 'btn hover:rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white  hover:bg-gradient-to-r hover:from-red-700 hover:to-red-700 mt-3 font-bold' : 'btn bg-gradient-to-r from-yellow-600 to-green-700 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-yellow-800 hover:to-green-800 font-bold'}}`}>Submit</button> : <button disabled type='submit' className={`bg-gray-500 ${expirations ? ' btn hover:rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white  hover:bg-gradient-to-r hover:from-red-700 hover:to-red-700 mt-3 font-bold' : 'btn bg-gradient-to-r from-yellow-600 to-green-700 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-yellow-800 hover:to-green-800 font-bold'}}`}>Submit</button>
                    }

                </form>
            </div>
        </div>
    );
};

export default FoodDetails;