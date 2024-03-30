import './App.css';

import ReactPrice from './Components/ReactPrice';
import { Users } from './utlis/ReactPricecomponents';


function App() {
  //const [cart,setcart]=useState(0)

  //   const image="https://static.toiimg.com/thumb/msid-78181550,width-1280,resizemode-4/78181550.jpg" 
  //  const name="Siddhu"
  return (
    <div className="App">

    

   
      <div class="priceborder">
        {
        Users.map((element) => (
        <ReactPrice    {...element} />))
        }
      </div>

    
    
      
    </div>
  );
}

export default App;
