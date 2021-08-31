/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, CameraIcon } from '@heroicons/react/outline'

export default function Contact() {
    return (
        <div className="bg-green-600 bg-opacity-40">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Nous Contacter</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500 font-bold">
                                Une question ?
                            </p>
                            <p className="text-lg text-gray-500">
                                Vous pouvez nous contacter à tout moment !
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <MailIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>contact@pickeat.fr</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <CameraIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500 underline">
                                    <a href="https://www.instagram.com/pickeat_france/?hl=fr">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
