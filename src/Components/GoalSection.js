/* This example requires Tailwind CSS v2.0+ */
import { GlobeIcon, GiftIcon, EmojiHappyIcon } from '@heroicons/react/outline'
import Peoples from '../Constants/peoples.jpg'

const supportLinks = [
    {
        name: 'Des produits en trop ?',
        description:
            'Vous avez des produits que vous n’allez pas consommer dans votre frigo, votre jardin ? Au lieu de les jeter à la poubelle, pensez plutôt à PickEat !',
        icon: GlobeIcon,
    },
    {
        name: 'Donnez les !',
        description:
            'Simplement, postez une annonce du produit concerné avec une photo et une courte description, et le tour est joué !',
        icon: GiftIcon,
    },
    {
        name: 'Un Picker heureux',
        description:
            'Le Picker n’aura plus qu’à le réserver, se mettre d’accord avec vous sur l’horaire à laquelle il va venir le récuperer, et c’est tout ! Un geste simple qui ravira tout le monde !',
        icon: EmojiHappyIcon,
    },
]

export default function Goal() {
    return (
        <div className="bg-white pt-5">
            {/* Header */}
            <div className="relative pb-32">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src={Peoples}
                        alt=""
                    />
                </div>
                <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" aria-hidden="true" />
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        <span>Lutter contre le gaspillage </span>
                        <span className="block text-green-600">alimentaire</span>
                        </h1>
                    <p className="mt-6 max-w-3xl text-xl text-gray-300 text-justify">
                        PickEat est une application communautaire visant à réduire le gaspillage alimentaire chez les particuliers. Les utilisateurs peuvent donner les produits qu'ils ne consommeront pas afin que d'autres les récupèrent, ou vendre leurs parts de plats vouées à être jetées, l'objectif étant de sensibiliser au gaspillage.
                    </p>
                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {supportLinks.map((link) => (
                        <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div className="absolute top-0 p-5 inline-block bg-green-600 rounded-xl shadow-lg transform -translate-y-1/2">
                                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                                <p className="mt-4 text-base text-gray-500 text-justify">{link.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
