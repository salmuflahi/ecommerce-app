import { Linter } from "eslint";

function ProductList () {

const products = [
  { id: 1, name: "shirt", price: 19.99 },
  { id: 2, name: "t-shrit", price: 24.99 },
  { id: 3, name: "pants", price: 39.99 },

];

const item = products.map(product => <li>
    {id}, {name}, {price}
</li>);
}

