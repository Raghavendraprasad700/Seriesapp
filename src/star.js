import { getValue } from '@testing-library/user-event/dist/utils';
import './App.css';
import StarNav from "./starnav"
import YelloBar from './yellobar';
// import "./yellobar.css"
import Star1 from "./star1"



function Star() 
{
 return (
    <div className="Star" >
    <StarNav/>
    <YelloBar/>
    <Star1/>

    </div>
  );
}
export default Star;