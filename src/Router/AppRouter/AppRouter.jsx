import { Route, Routes } from "react-router-dom";
import NetflixPlan from "../../pages/NetflixPlan";
import Spotify from "../../pages/Spotify";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<NetflixPlan />}></Route>
                <Route path='/spotify' element={<Spotify />}></Route>
            </Routes>
        </>
    );
}

export default AppRouter;