// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassCLick from './components/ClassCLick';
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
import './appStyle.css'
// import styles from './appStyle.module.css'
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/useContext';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './Hooks/HookCounter';
// import HooksCounterTwo from './Hooks/HooksCounterTwo';
// import HooksCountThree from './Hooks/HooksCountThree';
// import HookCounterFour from './Hooks/HookCounterFour';
// import ClassCounterOne from './Hooks/ClassCounterOne';
// import ParentComponents from './Hooks/ParentComponents';
// import Usememo from './Hooks/Usememo';
// import Useref from './Hooks/Useref';
// import ClassTimer from './Hooks/ClassTimer';
// import HookTimer from './Hooks/HookTimer';
import classExmple from './Hooks/classEx';

class App extends Component {
  render() {
  return (
    <div className="App">
       <classExmple/>
      {/* <HookTimer/> */}
      {/* <ClassTimer/> */}
      {/* <Useref/> */}
      {/* <Usememo/> */}
      {/* <ParentComponents/> */}
      {/* <Button/>
      <Count/>
      <Title/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HooksCountThree/> */}
      {/* <HooksCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <User render={(isLoggedin) => isLoggedin ? "Misbah" : "Guest user"}/> */}
       {/* <ClassCounter/> */}
      {/* <UserProvider value="Misbah">
      <ComponentC/>
      </UserProvider> */}
       {/* <HoverCounterTwo/>
      <ClickCounterTwo/> */}
      {/* <LifecycleA/> */}
        {/* <Form/> */}
      {/* <h4 className='error'>error</h4>
      <h4 className={styles.success}>success</h4> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary='True'/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
     {/* <FunctionClick/>
     <ClassCLick/> */}
       {/* <Counter/>
      <Message />
      <Greet name="Clark" />
      <Greet name="Diana" />
      <Welcome name="misbah"/> 
      <Welcome name="John"/> 
      <Welcome name="Elon"/>   */}
    </div>
  );
}
}

export default App;
