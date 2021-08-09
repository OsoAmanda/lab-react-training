import React from 'react';
//import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import Greetings from './greetings'
import Random from './random';
import BoxColor from './boxColor'
import CreditCard from './CreditCard';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <div className="card">
  <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
  </div>
  <h1>Greetings</h1>
  <div className="greet"> 
<Greetings lang="de">Ludwig</Greetings>
  </div>
  <div className="greet">
<Greetings lang="fr">François</Greetings>
  </div>
  <h1>Random</h1>
  <div className="random">
<Random min={1} max={6}/>
  </div>
  <div className="random">
<Random min={1} max={100}/>
  </div> 
  <h1>BoxColor</h1>
  <div className="color">
<BoxColor r={255} g={0} b={0} />
  </div>
  <div className="color">
<BoxColor r={128} g={255} b={0} />
  </div>
  <h1>CreditCard</h1>
  <div className="credit">
  <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" />
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222" />
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" />
    </div>
    </div>
  );
}

export default App;