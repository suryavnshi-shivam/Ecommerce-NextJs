
const ProductDetailsMetaTag = ({ product }) => {
  console.log(product)
  return (
    <>
      <div>
        <title>{product?.brand}</title>
        <meta name="description" content={product?.description} />
        <meta name="keyword" content={product?.title} />
        <meta name="author" content="Buoyancy Software" />
        <meta property="og:image" content={product?.thumbnail} />
      </div>
    </>
  );
};

export default ProductDetailsMetaTag;