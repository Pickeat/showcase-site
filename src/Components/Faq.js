import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
    {
        question: "Dans quels secteurs s’utilise Pickeat ?",
        answer:
            "Pickeat est principalement conçu pour des échanges de nourritures de proximité entre particuliers. Pickeat sera donc plus adapté aux échanges entre résidents d’un même quartier ou d’une même ville.",
    },
    {
        question: "Les échanges au sein de l’application sont-ils payants ?",
        answer:
            "Non, la nourriture se transmet de particuliers en particuliers sous forme de dons. Il n’y a donc pas d’échanges ou d’options supplémentaires payantes.",
    },
    {
        question: "Comment s’assurer de la bienveillance des utilisateurs ?",
        answer:
            "Chaque utilisateur possède une note évaluant la qualité de ses précédents échanges. Il est aussi possible de signaler un utilisateur Pickeat.",
    },
    {
        question: "Je suis végétarienne, est-il possible de n’afficher uniquement les produits labellisé “végétarien”",
        answer:
            "Tout à fait. L’application mobile ainsi que l’application web possède un filtre comportant différents régimes alimentaires. Il est donc possible de n’afficher que les produits correspondant à votre régime.",
    },
    {
        question: "Quel est l’âge minimum pour se créer un compte Pickeat ?",
        answer:
            "L’âge minimum requis pour utiliser Pickeat est de 13 ans.",
    },
    {
        question: "Je ne souhaite pas me déplacer sur une trop grande distance pour aller chercher mon produit, est-il possible de limiter la zone de recherche ?",
        answer:
            "Oui, une option permettant de chercher uniquement les produits dans un rayon personnalisé est disponible sur l’application mobile ainsi que sur l’application web.",
    },
    {
        question: "Est-il possible de supprimer son compte de l’application ?",
        answer:
            "En effet, il est tout à fait possible de supprimer son compte de Pickeat. Ceci supprimera par la même occasion toutes les annonces postées pas le compte en question.",
    },
    {
        question: "Est-il possible de publier une annonce avec des produits tels que des fruits ou des légumes ?",
        answer:
            "Les produits pouvant être postés sur Pickeat sont des produits possédant une date de péremption. Dans le cas des fruits et légumes, il ne sera possible de les proposer sur l’application uniquement si ceux-ci possèdent une date de péremption.",
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Faq() {
    return (
        <div className="bg-gray-50" id="faq">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Questions fréquemment posées</h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                <span className="font-medium text-gray-900">{faq.question}</span>
                                                <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                          />
                        </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
