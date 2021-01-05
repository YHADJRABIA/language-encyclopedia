import React, { useState, useEffect, createContext } from "react";
import { useTranslation } from "react-i18next";

/*To be imported by components that want to access the data.
The components need to also import { useContext} from react to consume the data.*/
export const DataContext = createContext();

//Holds the data to be provided. To be imported by App.js.
export const DataProvider = (props) => {
  // Only runs when the component mounts
  useEffect(() => {
    fetchItems();
  }, []); /*[] used to indicate that useEffect is only to be run once, or if a state is put inside
 then any interaction with it would trigger it.*/

  const [countries, setCountries] = useState([]);

  const fetchItems = async () => {
    const URL = "https://restcountries.eu/rest/v2/all"; // API URL
    const response = await fetch(URL);
    const data = await response.json(); // Fetching data then converting it to JSON
    //console.log(data);
    setCountries(data);
  };

  // Translations
  const { t, i18n } = useTranslation();

  const content = {
    // Nav
    languages: [
      { name: i18n.t("languages.en"), code: "en", flag: "gb", id: 1 },
      { name: i18n.t("languages.fr"), code: "fr", flag: "fr", id: 2 },
      { name: i18n.t("languages.ru"), code: "ru", flag: "ru", id: 3 },
      { name: i18n.t("languages.sv"), code: "sv", flag: "se", id: 4 },
    ],
    navTitles: [
      { name: i18n.t("navNames.about"), path: "#about", id: 1 },
      { name: i18n.t("navNames.skills"), path: "#skills", id: 2 },
      { name: i18n.t("navNames.portfolio"), path: "#portfolio", id: 3 },
    ],

    // Footer
  };

  /* 
  Passing the data to other components, we could list these components one by one but props.children is more efficient as it auto-selects all
  the children wrapped by <DataProvider> </DataProvider> in App.js.
  Passing navTitles as a value to be consumed by Nav.js
  */
  return (
    <DataContext.Provider value={(content, [countries, setCountries])}>
      {props.children}
    </DataContext.Provider>
  );
};
