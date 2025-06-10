export const MyItemsPromise = (email) => {
    return fetch(`http://localhost:3000/food/email?email=${email}`).then(res=>res.json())
}