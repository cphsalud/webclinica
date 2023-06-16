import { Brands } from "./components/Brands/Brands"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { HomeDefault } from "./components/Pages/Home/HomeDefault"

export const metadata = {
  title: 'Home | Clinica CPH Salud',
  description: 'Clinica CPH Salud, Home Inicio',
}

export default function Home() {
  return (
    <>
      <Header />
      <HomeDefault />
      <Contact />
      <Brands />
      <Footer />
    </>
  )
}
