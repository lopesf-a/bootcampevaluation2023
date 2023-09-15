import ProductCard from "../PostCard";
import "./style.css";

const Index = ({posts}) => {
  return (
    <div className="products__grid">
      {
        posts.map(
          (post) => (
            <ProductCard post={post} />
          )
        )
      }
    </div>
  );
}

export default Index;