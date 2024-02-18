
export default function Newsletter() {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter!</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Stay informed about the next dance
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                            Email Address
                            </label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder="Enter you email"
                            />
                            <button
                            type="submit"
                            className="flex-none rounded-md bg-pink-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                            >
                            Subscribe
                            </button>
                        </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <p className="mt-2 text-lg leading-7 text-gray-400">
                                Ecstatic Dance! Graz bietet euch wieder die Gelegenheit zur tänzerischen Forschungsreise!
                                </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="mt-2 text-lg leading-7 text-gray-400">
                                Ohne Zwang, Wertung und Formvorschriften. Für dich alleine oder gemeinsam, langsam oder schnell, eckig oder rund, in der Luft oder am Boden - ganz so, wiede wiede wie es dir gefällt!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="flex justify-center">
            <div className="flex flex-row">
                <div className="max-w-xl lg:max-w-lg">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter!</h2>
                </div>
                <div className="flex ml-10 mb-10">
                    <label htmlFor="email-address" className="sr-only">
                    Email Address
                    </label>
                    <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    style={{width: 400}}
                    className="min-w-0 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter you email"
                    />
                    <button
                    type="submit"
                    className="ml-4 flex-none rounded-md bg-pink-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                    >
                    Subscribe
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
