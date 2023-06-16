import { PanelTextInfo } from '@/app/styles/Banners'
import { PoliticasContent } from '@/app/styles/Politicas'
import React from 'react'

export const Politicas = () => {
    return (
        <PoliticasContent>
            {/* <PanelTextInfo>
                <h1>Política de Privacidad de CPH Salud</h1>
            </PanelTextInfo> */}
            <div className="text-politicas">
                <p>Esta Política de Privacidad establece cómo CPH Salud utiliza y protege cualquier información que usted proporciona a CPH Salud al utilizar este sitio web.</p>
                <p>CPH Salud está comprometida en garantizar que su privacidad está protegida. Si le pedimos que nos proporcione cierta información mediante la cual usted puede ser identificado al usar este sitio web, puede estar seguro de que solo se utilizará de acuerdo con esta declaración de privacidad.</p>
                <h1>Qué información recopilamos</h1>
                <p>Podemos recoger la siguiente información:</p>
                <ul>
                    <li>
                        <p>Nombre y apellidos.</p>
                    </li>
                    <li>
                        <p>Información de contacto, incluyendo dirección de correo electrónico.</p>
                    </li>
                    <li>
                        <p>Información demográfica, como código postal, preferencias e intereses.</p>
                    </li>
                    <li>
                        <p>Otra información relevante para encuestas de clientes y/u ofertas.</p>
                    </li>
                </ul>
                <h1>Para qué utilizamos esta información</h1>
                <p>Requerimos esta información para entender sus necesidades y brindarle un mejor servicio, y en particular por las siguientes razones:</p>
                <ul>
                    <li>
                        <p>Mantenimiento de registros internos.</p>
                    </li>
                    <li>
                        <p>Podemos usar la información para mejorar nuestros productos y servicios.</p>
                    </li>
                    <li>
                        <p>Podemos enviar periódicamente correos electrónicos promocionales sobre nuevos productos, ofertas especiales u otra información que pensamos que puede resultarle interesante utilizando la dirección de correo electrónico que ha proporcionado.</p>
                    </li>
                    <li>
                        <p>De vez en cuando, también podemos usar su información para contactarle con fines de investigación de mercado.</p>
                    </li>
                </ul>
                <h1>Seguridad</h1>
                <p>Estamos comprometidos en garantizar que su información esté segura. Para prevenir el acceso o la divulgación no autorizada, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para salvaguardar y asegurar la información que recopilamos en línea.</p>
                <h1>Cómo usamos las cookies</h1>
                <p>Una cookie es un pequeño archivo que pide permiso para ser colocado en el disco duro de su computadora. Una vez que acepta, el archivo se agrega y la cookie ayuda a analizar el tráfico web o le permite saber cuando visita un sitio en particular. Las cookies permiten que las aplicaciones web le respondan a usted como individuo.</p>
                <h1>Enlaces a otros sitios web</h1>
                <p>Nuestro sitio web puede contener enlaces a otros sitios de interés. Sin embargo, una vez que haya utilizado estos enlaces para salir de nuestro sitio, debe tener en cuenta que no tenemos ningún control sobre ese otro sitio web.</p>
                <h1>Control de su información personal</h1>
                <p>Si ha acordado previamente que utilicemos su información personal para fines de marketing directo, puede cambiar de opinión en cualquier momento contactándonos.</p>
                <p>No venderemos, distribuiremos ni alquilaremos su información personal a terceros a menos que tengamos su permiso o la ley nos obligue a hacerlo.</p>
                <p>Si cree que cualquier información que tenemos sobre usted es incorrecta o incompleta, por favor escríbanos o envíenos un correo electrónico tan pronto como sea posible. Corregiremos de inmediato cualquier información que se encuentre incorrecta.</p>
            </div>
        </PoliticasContent>
    )
}
