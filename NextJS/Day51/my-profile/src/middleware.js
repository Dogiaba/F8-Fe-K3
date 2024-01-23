const middleware = (request) =>{
    const pathname = request.nextUrl.pathname;
    console.log(pathname);
}
// export const config = {
//     matcher:[""]
// }

<<<<<<< HEAD
export default middleware
export const config = { matcher: ["/contact", "/profile"] };
=======
export default middleware
>>>>>>> a7a5c9e109c18f3d67315a859f86fd3070dfcd80
