import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Typografi from "./components/Typografi";
import ColumnImage from "./components/ColumnImage";
import BackgroundImage from "./components/BackgroundImage";
import TransformTranslate from "./components/TransformTranslate";
import ResponsiveDesign from "./components/ResponsiveDesign";
import Grid from "./components/Grid";
import GaleryImage from "./components/GaleryImage";
import PseudoClassTailwind from "./components/PseudoClassTailwind";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Typografi />} />
        <Route path="layout" element={<Layout />} />
        <Route path="coloumn" element={<ColumnImage />} />
        <Route path="background_image" element={<BackgroundImage />} />
        <Route path="pseudo_class" element={<PseudoClassTailwind />} />
        <Route path="transform" element={<TransformTranslate />} />
        <Route path="responsive" element={<ResponsiveDesign />} />
        <Route path="grid" element={<Grid />} />
        <Route path="galery" element={<GaleryImage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
