import { BoxesContainer } from "@/app/styles/Home"
import Link from "next/link"


export const BoxesHome = () => {
  return (
    <BoxesContainer>
      <div className="box-1">
        <div className="title">
          <Link href="/profesionales" >
            <p>Equipo</p>
            <b>altamente calificado</b>
          </Link>
        </div>
      </div>
      <div className="box-2">
        <div className="title">
          <Link href="/sobre-nosotros" >
            <p>Tecnología de</p>
            <b>última generación</b>
          </Link>
        </div>
      </div>
      <div className="box-3">
        <div className="title">
          <Link href="/especialidades" >
            <p>Todas las especialidades</p>
            <b>odontológicas</b>
          </Link>
        </div>
      </div>
    </BoxesContainer>
  )
}
