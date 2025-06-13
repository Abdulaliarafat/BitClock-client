export const MyItemsPromise = (email) => {
    return fetch(`https://assignment-11-server-steel-six.vercel.app/food/email?email=${email}`).then(res=>res.json())
}