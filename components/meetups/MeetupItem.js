import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";


function MeetupItem(props) {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext)

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  async function deleteHandler(theId) {
    await globalCtx.updateGlobals( {cmd: 'deleteMeeting', newVal: theId})
  //  router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <div className={classes.main}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.mainContent}>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
           <div className={classes.actions}>
            <button onClick={showDetailsHandler}>Show Details</button>
          </div>
          <div className={classes.favourites}>
            <button onClick={() => deleteHandler(props.id)}><RiDeleteBin5Fill/></button>
          </div>
         
        </div>
      </div>
    </li>
  );
}

export default MeetupItem;
