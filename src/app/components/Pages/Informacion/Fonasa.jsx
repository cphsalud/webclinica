import { PanelTextInfo } from '@/app/styles/Banners'
import { ButtonLineBlack } from '@/app/styles/Buttons/Buttons'
import React from 'react'

export const Fonasa = () => {
    return (
        <>
            <PanelTextInfo>
                <h1>Fonasa</h1>
            </PanelTextInfo>
            <div className="text-fonsasa">
                <h1>
                    <strong>En CPH Salud</strong>, los inscritos en <strong>FONASA</strong> pueden resolver sus necesidades de salud oral. <br /><br />
                    Las personas <strong>cotizantes de FONASA y sus cargas</strong>, <strong>pueden atenderse en nuestra clínica</strong> a través de la compra de <strong>bonos en recepción</strong> el mismo día de su cita.
                </h1>
                <a href="https://a878ac7020d193c1dc78740f7966df3c6a02c5e8.agenda.softwaredentalink.com/agendas/agendamiento" target='_blank'>
                    <ButtonLineBlack>Agendar Ahora</ButtonLineBlack>
                </a>
            </div>
        </>
    )
}
