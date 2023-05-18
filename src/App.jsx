import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ComparePage from "./pages/ComparePage";
import MainPage from "./pages/MainPage";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/compare" element={<ComparePage />} />
			</Routes>
		</div>
	);
}

export default App;
