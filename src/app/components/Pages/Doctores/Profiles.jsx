import { ProfilesContainer } from '@/app/styles/Doctores'
import { MyImages } from '../../images/MyImages'
import Image from 'next/image'
import one from '@/app/assets/doctores/1.jpg'
import two from '@/app/assets/doctores/2.jpg'
import three from '@/app/assets/doctores/3.jpg'
import four from '@/app/assets/doctores/4.jpg'
import five from '@/app/assets/doctores/5.jpg'
import six from '@/app/assets/doctores/6.jpg'
import seven from '@/app/assets/doctores/7.jpg'
import eight from '@/app/assets/doctores/8.jpg'
import nine from '@/app/assets/doctores/9.png'
import eye from '@/app/assets/iconos/eye.svg'

export const Profiles = () => {

    const profileContent = [
        {
            id: 1,
            image: one,
            name: 'Dr. Roberto Santana L',
            description: 'DIRECTOR CLINICO Y REHABILITADOR ORAL / N° 4434 SUPERINTENDENCIA DE SALUD',
            url: '#',
        },
        {
            id: 2,
            image: two,
            name: 'Dra. Sofia Dussaillant Jones',
            description: 'REHABILITADORA ORAL / N° 158476 SUPERINTENDENCIA DE SALUD',
            url: '#',
        },
        {
            id: 3,
            image: three,
            name: 'Dr. Catalina Papic V',
            description: 'PERIODONCISTA / N° 92121 SUPERINTENDENCIA DE SALUD',
            url: '#',
        },
        {
            id: 4,
            image: four,
            name: 'Dr. Diego Duran P',
            description: 'IMPLANTÓLOGO / N° 94740 SUPERINTENDENCIA DE SALUD',
            url: '#',
        },
        {
            id: 5,
            image: five,
            name: 'Dra. Josefa Madrid P',
            description: 'ENDODONCISTA / N° 158505 SUPERINTENDENCIA DE SALUD',
            url: '#',
        },
        {
            id: 6,
            image: six,
            name: 'Dra. Nicole Manzur M',
            description: 'CIRUJANO DENTISTA / N° 582464 SUPERINTENDENCIA DE SALUD',
            url: '#',
        },
        {
            id: 7,
            image: seven,
            name: 'Dra. Denisse Yojay C',
            description: 'ENDODONCISTA / N° 92041 SUPERINTENDENCIA DE SALUD',
            url: '#',
        },
        {
            id: 8,
            image: eight,
            name: 'Dr. Francisco Ortiz L',
            description: 'IMPLANTÓLOGO / N° 68722 SUPERINTENDENCIA DE SALUD',
            url: '#'
        },
        {
            id: 9,
            image: nine,
            name: 'Dr. Victor Rojas',
            description: 'ORTODONCISTA / N° 92131 SUPERINTENDENCIA DE SALUD',
            url: '#'
        },

    ];

    return (
        <ProfilesContainer>
            {profileContent?.map((profile, index) => {
                return (
                    <div key={index}>
                        <Image src={profile.image} alt={profile.name} />
                        <div className="bg"></div>
                        <div className="text">
                            <h3>{profile.name}</h3>
                            <p>{profile.description}</p>
                        </div>
                        <div id="eye">
                            <a>
                                {MyImages(eye)}
                            </a>
                        </div>
                    </div>
                )
            }
            )}
        </ProfilesContainer>
    )
}
