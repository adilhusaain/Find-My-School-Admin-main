import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import AddAdmin from '../pages/AddAdmin'
import AdminLog from '../pages/AdminLog'
import UserLog from '../pages/UserLog'
import AddInstitute from '../pages/AddInstitute'
import Layout from './Layout';









function AppRouter(props) {
  
  return (
    <Router>
      
         
            
         <Layout>
         <Switch>
           <Route exact path="/">
             <Dashboard />
           </Route>
           <Route path="/addadmin">
             <AddAdmin />
           </Route>
           <Route path="/adminlog">
             <AdminLog />
           </Route>
           <Route path="/userlog">
             <UserLog />
           </Route>
           <Route path="/addinstitute">
             <AddInstitute />
           </Route>
         </Switch>
         </Layout>
       
    </Router>
  );
}

export default AppRouter;