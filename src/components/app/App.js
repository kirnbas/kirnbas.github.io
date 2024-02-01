import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleItemPage = lazy(() => import('../pages/SingleItemPage'));

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner></Spinner>}>
                        <Routes>   
                            <Route path="/" element={<MainPage/>} />                     
                            <Route path="/comics" element={<ComicsPage/>}>                            
                            </Route>
                            <Route path="/comics/:itemId" element={<SingleItemPage mode="comic"></SingleItemPage>}></Route>
                            <Route path="/chars/:itemId" element={<SingleItemPage mode="char"></SingleItemPage>}></Route>
                            <Route path="*" element={<Page404 />}></Route>                        
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;