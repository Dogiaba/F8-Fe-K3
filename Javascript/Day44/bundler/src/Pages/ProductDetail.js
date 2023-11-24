export const ProductDetail = ({data}) =>{
    const {id} = data;
    // console.log(router)
    return `
    <h1>Chi tiết sản phẩm:${id}</h1>
    <button class="btnBack" onclick="navigate('/san-pham')">Back</button>
    `
}