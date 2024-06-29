import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import Add from './Components/Add'
import View from './Components/View'
import Edit from './Components/Edit'
import PageNotFound from './Components/PageNotFound'

function App() {
  return (
    <div className="App">
   <Header/>
<Routes>
 {/* localhost://3000 -admin page */}
 <Route path='' element={<Admin/>} />
 {/* localhost://3000/add -admin page */}
 <Route path='/add' element={<Add/>} />
 {/* localhost://3000/view/1 - view page*/}
 <Route path='/view/:id' element={<View/>} />
 {/* localhost://3000/edit/1 - edit page */}
 <Route path='/edit/:id' element={<Edit/>} />
 {/* localhost://3000 ** - pagenotfound */}
 <Route path='*' element={<PageNotFound/>}/>

</Routes>
   <Footer/>
    </div>
  );
}

export default App;
