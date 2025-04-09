import './App.css'
import LeftPanel from "./layouts/LeftPanel/LeftPanel.jsx";
import Body from "./layouts/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import CardButton from "./components/CardButton/CardButton.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import {useEffect, useState} from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import {UserContext, UserContextProvider} from "./context/user.context.jsx";

// let isFirstRun = true;
// let localDataCacheJSON;
function App() {
  const [data, saveData] = useLocalStorage('data');

  function addItem(item) {
    const newData = data ? [...data] : [];
    const ids = newData.map(item => item.id);
    const maxId = Math.max(...ids, 1);

    for (let i = 1; i <= maxId + 1; i++) {
      if (!ids.includes(i)) {
        item.id = i;
        break;
      }
    }
    item.date = new Date(item.date);
    newData.push(item);
    saveData(newData);
  }

  // const [userId, setUserId] = useState(1);


  return (
    // <UserContext.Provider value={{userId, setUserId}}>
      <UserContextProvider>
        <div className="app">
          <LeftPanel>
            <Header />
            <JournalAddButton />
            <JournalList data={data} />
          </LeftPanel>
          <Body>
            <JournalForm addItem={addItem} />
          </Body>
        </div>
      </UserContextProvider>
    // </UserContext.Provider>
  )
}

export default App
