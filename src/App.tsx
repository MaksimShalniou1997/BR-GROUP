import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoriesPage } from "./pages/stories";
import { StoryPage } from "./pages/story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoriesPage />} />
        <Route path="/story/:id" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
