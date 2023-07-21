import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>
//       <div>
//         {pizzaData.map((pizza) => (
//           <Pizza name={pizza.name} />
//         ))}
//       </div>
//     </main>
//   );
// }

function Header() {
  return (
    <header className="header">
      <h1>PIZZA CO .int</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : null}
      {/* conditional ternary */}
    </main>
  );
}
function Pizza(props) {
  // if (hour >= openHour && hour <= closeHour) console.log("shop Open");
  // else console.log("we're closed");
  // console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} we're currently open */}
      <div className="order">
        {(isOpen && (
          <p>We're open until {closeHour}.come visit us or order online.</p>
        )) || <p>We're currently Closed</p>}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
  // return React.createElement("footer", null, "we're currently open");
}

const dynamic = ReactDOM.createRoot(document.getElementById("root"));
dynamic.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
