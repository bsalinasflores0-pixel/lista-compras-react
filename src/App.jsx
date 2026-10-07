import React, { Component, useState } from "react";

// Componente funcional para el formulario
function ItemForm({ addItem }) {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item.trim() !== "") {
      addItem(item);
      setItem("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Añadir artículo"
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

// Componente de clase para la lista
class ItemList extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.setState({
      items: ["Manzanas", "Pan"],
    });
  }

  addItem = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  render() {
    return (
      <div>
        <h2>Lista de Compras</h2>

        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Componente estático
const Title = () => <h1>Bienvenido a la Lista de Compras</h1>;

// Componente principal
class App extends Component {
  constructor(props) {
    super(props);

    this.itemListRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Title />

        <ItemForm
          addItem={(item) => this.itemListRef.current.addItem(item)}
        />

        <ItemList ref={this.itemListRef} />
      </div>
    );
  }
}

export default App;