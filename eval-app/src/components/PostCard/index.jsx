import "./style.css";

const Index = ({ post }) => {

  console.log(post);
  
  const renderDiscountPrice = (price, discount) => {
    const discountPrice = price - (price * discount / 100);
    const priceFormatted = `${discountPrice.toFixed(2)} € (${discount}% de réduction)`
    return priceFormatted;
  }

  return (
    <div className="product__card">
      {/* <a href="https://freefakeapi.io/api/posts/[post.id]"> test </a>  */}
      <div className="product__thumbnail">
        <img src={post.picture} alt={post.title} />
      </div>
      <div className="product__content">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      
        
      </div>
    </div>
  );
}

export default Index;