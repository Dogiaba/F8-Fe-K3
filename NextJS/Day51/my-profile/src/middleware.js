const middleware = (request) =>{
    const pathname = request.nextUrl.pathname;
    console.log(pathname);
}
// export const config = {
//     matcher:[""]
// }

export default middleware