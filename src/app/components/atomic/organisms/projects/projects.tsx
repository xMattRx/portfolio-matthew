import bikcraft from '@/app/assets/bikcraft.png'
import disney from '@/app/assets/disney-plus.jpg'
import ghibi from '@/app/assets/ghibi.png'
import jordan from '@/app/assets/jordan.png'
import login from '@/app/assets/login.png'
import uolflix from '@/app/assets/uolflix.png'
// import weather from '@/app/assets/weather.png'
import Image from 'next/image'
import { Subtitle } from '../../atoms/subtitle/subtitle'
import styles from "./projects.module.scss"

export default function Projects() {
  return (
    
  <section className={styles.projects} id="projetos">
    <div className={styles.projects__container}>
    <Subtitle theme={'light'} value={"Projetos"} />

      <div className={styles.projects__wrapper}>
        <a className={styles.project__link} href="https://clone-netflix-89jry36yr-xmattrx.vercel.app" target="_blank">
          <div className={styles.project}>
            <Image className={styles.project__img} src={uolflix} alt=""/>
            <p className={styles.project__legend}>Clone Netflix</p>
          </div>
        </a>
        <a className={styles.project__link} href="https://bikcraft-final.vercel.app" target="_blank">
          <div className={styles.project}>
            <Image className={styles.project__img} src={bikcraft} alt=""/>
            <p className={styles.project__legend}>Bikcraft</p>
          </div>
        </a>
        <a className={styles.project__link} href="https://disneyplus-clone-e28b6.firebaseapp.com" target="_blank">
          <div className={styles.project}>
            <Image className={styles.project__img} src={disney} alt=""/>
            <p className={styles.project__legend}>Clone Disney Plus</p>
          </div>
        </a>
        <a className={styles.project__link} href="https://codelandia-jordan-shoes.vercel.app" target="_blank">
          <div className={styles.project}>
            <Image className={styles.project__img} src={jordan} alt=""/>
            <p className={styles.project__legend}>Jordan Shoes</p>
          </div>
        </a>
        <a className={styles.project__link} href="https://codelandia-login-42k1smrny-xmattrx.vercel.app" target="_blank">
          <div className={styles.project}>
            <Image className={styles.project__img} src={login} alt=""/>
            <p className={styles.project__legend}>Página de login</p>
          </div>
        </a>
        <a className={styles.project__link} href="https://codelandia-studio-ghibli.vercel.app" target="_blank">
          <div className={styles.project}>
            <Image className={styles.project__img} src={ghibi} alt=""/>
            <p className={styles.project__legend}>Studio Ghibli</p>
          </div>
        </a>
      </div>

    </div>
  </section>

  )
}
