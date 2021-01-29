import './App.css';
import Header from './components/Header.js';
import Item from './components/Item.js';
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Accessories from './assets/Desktop-Accessories.jpg'



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__itemsContainer">
        <Item
          title='Lowest Cost Solar Pannels in America'
          desc='Money-back gurenty'
          backgroundImg={SolarPanels}
          leftBtnTxt='Order Now'
          leftBtnLink=''
          rightBtnTxt="Learn More"
          rightBtnLink=''
          twoButtons='true'
          first
        />

        <Item
          title='Model S'
          desc='Order Online for Touchless Delivery'
          backgroundImg={ModelS}
          leftBtnTxt='Customer Order'
          leftBtnLink=''
          rightBtnTxt='Existing Inventory'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Model 3'
          desc='Order Online for Touchless Delivery'
          backgroundImg={Model3}
          leftBtnTxt='Customer Order'
          leftBtnLink=''
          rightBtnTxt='Existing Inventory'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Model X'
          desc='Order Online for Touchless Delivery'
          backgroundImg={ModelX}
          leftBtnTxt='Customer Order'
          leftBtnLink=''
          rightBtnTxt='Existing Inventory'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Model Y'
          desc='Order Online for Touchless Delivery'
          backgroundImg={ModelY}
          leftBtnTxt='Customer Order'
          leftBtnLink=''
          rightBtnTxt='Existing Inventory'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Solar For New Roofs'
          desc='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          backgroundImg={SolarRoof}
          leftBtnTxt='Order Now'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Accessories'
          desc='Order Online for Touchless Delivery'
          backgroundImg={Accessories}
          leftBtnTxt='Order Online'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink=''
          twoButtons='false'
        />
      </div>
    </div>
  );
}

export default App;
