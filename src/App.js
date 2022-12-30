import "./App.css";
import AddTodo from "src/components/AddTodo";
import ListTodo from "src/components/ListTodo";
import Footer from "src/components/Footer";
import { Provider } from "react-redux";
import rootStore from "src/redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={rootStore}>
        <AddTodo />
        <ListTodo />
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
