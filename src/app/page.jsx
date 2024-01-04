import Image from "next/image";
import Heros from "./components/layouts/Heros";
import HomeMenu from "./components/layouts/HomeMenu";
import Store from "./components/history/Store";


export default function Home() {
  return (
    <> 
   
    <Heros/>
    <HomeMenu/>
    <Store/>
    </>
  );
}
