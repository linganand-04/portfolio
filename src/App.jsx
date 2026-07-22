import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import LoadingScreen from "@/components/LoadingScreen";

export default function App() {
  const [showContent] = useState(true);

  return (
    <>
      <LoadingScreen />
      {showContent && (
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}
