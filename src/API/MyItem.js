export const MyItemsPromise = (email) => {
    return fetch(`https://bitclock-server.vercel.app/food/email?email=${email}`).then(res=>res.json())
}