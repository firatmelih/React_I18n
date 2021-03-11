import React, {Suspense} from 'react';
import './App.css';
import {useTranslation} from "react-i18next";


function App()
{
    return (
      
      <div
      style={{
        backgroundColor: 'gray',
        color: 'white',
        width: '100%',
        height: '100%'
      }}
    >
        <Suspense fallback="loading">
            <div className="App">
            
        <HeaderComponent/>
        <Bottom/>
        <Melih/>
            </div>
        </Suspense>
        </div>
    );
}









function HeaderComponent()
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <h1>{t('welcome.title', {framework:'React'})}</h1>
        <button onClick={() => i18n.changeLanguage('tr')}>tr</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
}

function Bottom()
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <h1>{t('welcome.message', {framework:'React'})}</h1>
    </div>
}

function Melih()
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <h1>{t('welcome.people', {framework:'React'})}</h1>
    </div>
}

export default App;