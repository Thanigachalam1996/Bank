import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'; 
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './UI/Header';
import Footer from './UI/Footer';
import EditProfile from './components/Profile/EditProfile';

const App = props =>  {
  return (
     <BrowserRouter>
     <Header/>
     <div className="container">
       <Switch>
         <Route component={Login} path="/" exact={true} />
         <Route component={Register} path="/register" />
         <Route component={Dashboard} path="/dashboard" />
         <Route component={EditProfile} path="/profile/{id}" />
       </Switch>
     </div>
     <Footer/>
   </BrowserRouter>
  );
}

export default App;
