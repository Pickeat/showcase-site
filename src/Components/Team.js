import Mat from '../Constants/mat.jpeg'
import Gregoire from '../Constants/gregoire.jpeg'
import Romain from '../Constants/romain.jpeg'
import Pierre from '../Constants/pierre.jpeg'
import Mahe from '../Constants/mahe.jpeg'
import Abel from '../Constants/abel.jpeg'
import Steeven from '../Constants/steeven.jpeg'
import Baptiste from '../Constants/baptiste.jpeg'

import {GlobeAltIcon} from "@heroicons/react/outline";

const people = [
    {
        name: 'Grégoire Lanfranchini',
        role: 'CEO & Développeur Front',
        imageUrl: Gregoire,
        linkedinUrl: 'https://www.linkedin.com/in/grégoire-lanfranchini-90b76015a/?originalSubdomain=fr',
    },
    {
        name: 'Mathieu Gery',
        role: 'DevOps, Admin Sys & fullstack',
        imageUrl: Mat,
        twitterUrl: 'https://mathieu.gery.me',
        linkedinUrl: 'https://www.linkedin.com/in/mathieu-gery-a75547157/',
    },
    {
        name: 'Steeven Regnault',
        role: 'CTO, Développeur Backend & DevOps',
        imageUrl: Steeven,
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/in/steeven-regnault/',
    },
    {
        name: 'Pierre Chaudron',
        role: 'Développeur Backend',
        imageUrl: Pierre,
        linkedinUrl: 'https://www.linkedin.com/in/pierre-chaudron-35754515a/',
    },
    {
        name: 'Romain Floriani',
        role: 'Développeur Backend',
        imageUrl: Romain,
        linkedinUrl: 'https://www.linkedin.com/in/romain-floriani/',
    },
    {
        name: 'Abel Vinuela-Hamoudi',
        role: 'Développeur Mobile',
        imageUrl: Abel,
        linkedinUrl: 'https://www.linkedin.com/in/abel-vinuela-hamoudi-3124a4151/',
    },
    {
        name: 'Baptiste Gobet',
        role: 'Développeur Mobile',
        imageUrl: Baptiste,
        linkedinUrl: 'https://www.linkedin.com/in/baptiste-gobet/',
    },
    {
        name: 'Mahé Caurette',
        role: 'Développeur Front',
        imageUrl: Mahe,
        linkedinUrl: 'https://www.linkedin.com/in/mahé-caurette-5ab2a015b/',
    },
    // More people...
]
export default function Team() {
    return (
        <div className="bg-white" id="team">
            <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Qui sommes-nous ?</h2>
                        <p className="text-xl text-gray-500">
                            Nous sommes une équipe de 8 développeurs d'Epitech Lille, par défaut tous développeurs Fullstack.
                            Certains membres ont des capacités techniques plus approfondies dans certains domaines.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="space-y-6">
                                    <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                                    <div className="space-y-2">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3>{person.name}</h3>
                                            <p className="text-green-600">{person.role}</p>
                                        </div>
                                        <ul role="list" className="flex justify-center space-x-5">
                                            {person.twitterUrl ?
                                            <li>
                                                <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">Twitter</span>
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                </a>
                                            </li> : <div/>}
                                            <li>
                                                <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
