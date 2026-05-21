
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import CustomPage from "./pages/CustomPage";
import { Error } from "./pages/Error";




const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navigate to="/react-power-house" replace />} />
            <Route path="/react-power-house" element={<RootLayout />} />
            <Route path="/react-power-house" element={<RootLayout />}>
                <Route path="hooks/:hookname" element={<CustomPage />} />
            </Route>
             <Route path="*"  element={<Error />} />
        </>

    )
)
export default router;
