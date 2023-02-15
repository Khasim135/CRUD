import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./CRUD/Home"
import Create from "./CRUD/Create"
import User from "./CRUD/User"
import Edit from "./CRUD/Edit"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Home></Home>
            <Routes>
                <Route path='/c' element={<Create></Create>}/>
                <Route path='/u' element={<User></User>}/>
                <Route path={`/ed/:index`} element={<Edit></Edit>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}
export default App
