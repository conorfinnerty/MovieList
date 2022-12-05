import MeetupList from '../components/meetups/MeetupList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"
// import "./styles/GlobalStyles.css"

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return <MeetupList meetups={globalCtx.theGlobalObject.meetings} />
    }
    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage;