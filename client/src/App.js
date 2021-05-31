import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import CreateView from "./views/CreateView";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import UpdateView from "./views/UpdateView";
import AuthView from "./views/AuthView";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeView} exact />
          <Route path="/create" component={CreateView} />
          <Route path="/update/:id" component={UpdateView} />
          <Route path="/auth" component={AuthView} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
