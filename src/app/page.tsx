import { Experience } from "./components/atomic/organisms/experience/experience";
import { Footer } from "./components/atomic/organisms/footer/footer";
import { Formation } from "./components/atomic/organisms/formation/formation";
import { Header } from "./components/atomic/organisms/header/header";
import { Introduction } from "./components/atomic/organisms/introduction/introduction";

export default function Home() {
  return (
    <>
      <Header/>
      <Introduction/>
      <Experience/>
      <Formation/>
      <Footer/>
    </>
  );
}
