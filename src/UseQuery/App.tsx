import Axios from 'UseQuery/Axios';
import Layout from 'Container/GlobalLayout/GlobalLayout';

import Query1 from 'UseQuery';
 
const App1 =()=>{
    return (
        <Layout>
          <Query1/>
          <Axios/>
        </Layout>
      )
} 

export default App1;