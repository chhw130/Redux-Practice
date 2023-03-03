import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The Second book I ever wrote",
  },
  {
    id: "p3",
    price: 30,
    title: "My Third Book",
    description: "The third book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((dum) => {
          return (
            <ProductItem
              key={dum.id}
              id={dum.id}
              title={dum.title}
              price={dum.price}
              description={dum.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
