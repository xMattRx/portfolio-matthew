'use client'
import { useTheme } from "./Context/ThemeContext";
import { Experience } from "./components/atomic/organisms/experience/experience";
import { Footer } from "./components/atomic/organisms/footer/footer";
import { Formation } from "./components/atomic/organisms/formation/formation";
import { Header } from "./components/atomic/organisms/header/header";
import { Introduction } from "./components/atomic/organisms/introduction/introduction";
import Projects from "./components/atomic/organisms/projects/projects";

export default function Home() {

  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      <Header/>
      <Introduction/>
      <Experience/>
      <Formation/>
      <Projects/>
      <Footer/>
    </div>
  );
}
