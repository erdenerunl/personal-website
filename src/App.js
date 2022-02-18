import { useState } from 'react';
import './App.scss';
import { ModernTemplate } from './components/ModernTemplate/ModernTemplate';
import OldSiteTemplate from './components/OldSiteTemplate/OldSiteTemplate';

function App() {

  const [isSwitched, setSwitchedComponent] = useState(false);
  const childToParent = (isSwitched) => {
    setSwitchedComponent(isSwitched);
  }
  const renderedComponent = () => {
    if (isSwitched) {
      return <ModernTemplate></ModernTemplate>
      
    }
    return <OldSiteTemplate childToParent={childToParent}></OldSiteTemplate>

  }
  return (
    <div className='App'>
      <ModernTemplate></ModernTemplate>
    </div>
  );
}

export default App;
