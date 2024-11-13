export default function ProductDetails( {params}:{params:{productid:string}} ) {
    return (
        <>
        <h1>details about product {params.productid}</h1>
        </>
    )
}