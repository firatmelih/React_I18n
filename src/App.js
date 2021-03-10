import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {I18nProvider, LOCALES} from './i18n';
import { IntlProvider } from 'react-intl';
import {FormattedMessage} from 'react-intl';

function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    
    <I18nProvider locale={locale}>
    <div className="App">
      <header className="App-header">
        <FormattedMessage id="hello"/>
                <img src={logo} className="App-logo" alt="logo" />
        <p>
        <FormattedMessage id="edit"/>
        </p>
        <button onClick={()=> setLocale(LOCALES.ENGLISH)}>ENGLISH</button>
        <button onClick={()=> setLocale(LOCALES.TURKISH)}>TURKISH</button>
      </header>
    </div>
    
    </I18nProvider>
    
  );
}

export default App;
