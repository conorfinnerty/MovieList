import classes from './MainNavigation.module.css'
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import HamMenuFAB from "../generic/HamMenuFAB"
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import HamMenuContent from "./HamMenuContent"
import { useRouter } from 'next/router'
import { RiMovie2Line } from "react-icons/ri";




function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  function toggleMenuHide() {
    globalCtx.updateGlobals({cmd: 'hideHamMenu', newVal: false})
  }


  const contents = [
    {title: 'All Movies', webAddress: '/'}, 
    {title: 'Watched List', webAddress: '/'}, 
    {title: '+ Add a new movie', webAddress: '/new-meetup'}, 
    {title: 'Watch List', webAddress: '/Watch-list'},
 

  ]
  return (
    <header className={classes.header}>
      <HamMenuContent contents={contents} />
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <div className={classes.icon}> 
        <a href= '/'>
        <h1><RiMovie2Line/></h1>
        </a>
      </div>

      <h1>
        Movie Watchlist
      </h1>
      
      
      <HamMenuFAB toggleMenuHide={() => toggleMenuHide()} />
      <nav>
        <ul>
          <li>
            <Link href='/'>Watch List</Link>
          </li>
          <li>
            <Link href='/favourites'>Favourites</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add To Watchlist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
