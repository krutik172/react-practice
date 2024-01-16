import './App.css'
import Car from './Car'
import Slots from './Slots'
import ShoppingList from './ShoppingList';
import Properties from "./Properties";
import ColorList from "./ColorList"
import ObjDemo from './ObjDemo';
import FormDemo from './FormDemo';
import Counter from './Counter';
// const data = [
//   { id: 1, name: "Eggs", price: 250, completed: true },
//   { id: 2, name: "Bread", price: 50, completed: true },
//   { id: 3, name: "Milk", price: 30, completed: false },
// ];
// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];
function App() {

  return (
    <div>
      {/* // <Car name="BMW" year={2011} fontSize="10px" />
      // <Car name="Audi" year={2019} />
      // <Car name="Nissan GTR" year={2010} />
      // <Slots val1="s" val2="s" val3="s" />
      // <Slots val1="s" val2="r" val3="s" />
      // <Slots val1="s" val2="r" val3="s" />
      // <ShoppingList items={data} />
      // <Properties data={properties}/> */}
      {/* <ColorList colors = {["red","blue", "green","yellow","purple","orange","teal","silver","gold","black","pink"]}/> */}
      {/* <ObjDemo/>
      <FormDemo/> */}
      <Counter/>
    </div>
  )
}

export default App
