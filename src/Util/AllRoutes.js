import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "Pages/Auth";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/auth"} element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};
