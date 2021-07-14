import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import AddAdmin from '../pages/AddAdmin'
import AdminLog from '../pages/AdminLog'
import UserLog from '../pages/UserLog'
import AddInstitute from '../pages/AddInstitute'
import Layout from './Layout';
import PushNotification from "../pages/PushNotification"
import InstituteDetails from "../pages/InstituteDetails"
import InstituteRequests from "../pages/InstituteRequests"
import RequestDetails from "../pages/RequestDetails"
import UpdateInstitute from '../pages/UpdateInstitute';







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
           <Route path="/requests">
             <InstituteRequests/>
           
           </Route>
           <Route path="/addinstitute">
             <AddInstitute />
           </Route>
           <Route path="/pushnotification">
             <PushNotification />
           </Route>
           <Route path="/institutedetails">
             <InstituteDetails />
           </Route>
           <Route path="/requestsdetails">
             <RequestDetails />
           </Route>
           <Route path="/InstituteDetails/:id"  component={UpdateInstitute}>
             
           </Route>

         </Switch>
         </Layout>
       
    </Router>
  );
}

export default AppRouter;
