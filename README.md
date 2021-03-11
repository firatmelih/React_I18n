# React ile I18n 

## I18n nedir?

I18n basitçe websitelerinize çoklu dil desteğini sağlamak için yazılmış bir pakettir. Bu projede kullandığım ise bu paketin React'e uyarlanmış halidir.

## Nasıl Kurulur?

Öncelikle terminalden gerekli node paketlerimizi indiriyoruz.

```properties
melih@desktop:~$ npm install i18next react-i18next --save
```

src dizininde dil dosyalarını tutacak bir klasör oluşturacağız, yazdığımız kod çevirileri buradan çekecek.

<img src="https://cdn.discordapp.com/attachments/750658674078253158/819483633727176725/translate-dizin.png">

*Ben böyle olmasını uygun gördüm, kodlarımı birebir alacaksanız hata yaşamamanız için sizin de birebir bu şekilde yapmanız gerekir.*

src > translations > en > common.json;
``` json
{
    "example":{
        "children": "This is an example translate."
    }
}
```
src > translations > tr > common.json;
``` json
{
    "example":{
        "children": "Bu örnek bir çeviridir."
    }
}
```

src > index.js' da ihtiyacımız olan çağırmaları yapacağız;

``` javascript
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_tr from "./translations/tr/common.json";
import common_en from "./translations/en/common.json";
```

src > index.js' da çağırdığımız i18next' i tanımlıyoruz.
``` javascript
i18next.init({
    interpolation: { escapeValue: false },  // REACT ZATENKAÇIŞ SAĞLIYOR
    lng: 'en',                              // DEFAULT KULLANACAĞIMIZ DİL
    resources: {
        en: {
            common: common_en               // 'common' json'un adı
        },
        tr: {
            common: common_tr
        },
    },
});

// App' i i18next'in içine alıyoruz ki kalıtımları alsın.
 <I18nextProvider i18n={i18next}> 
            <App/>
  </I18nextProvider>
```

src > App.js' da çağırmalarımızı yapıyoruz.

``` javascript
import {useTranslation} from "react-i18next";
```

src > App.js' da örnek bir translate kullanımı;

``` javascript

// TANIMLANIŞ
function ExampleTranslate()
{
    const [t, i18n] = useTranslation('common');
    return <div>
        <h1>{t('example.children')}</h1>
        <button onClick={() => i18n.changeLanguage('tr')}>tr</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
}

// KULLANIM
function App()
{
    return (
        <ExampleTranslate/> // Ekrana seçilen dile ait .json dosyasının belli kısmını basacaktır.
    );
}


```

Yazan: Melih FIRAT


