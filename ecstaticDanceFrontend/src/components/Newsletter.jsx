
export default function Newsletter() {
    return (
        <div className="flex justify-center m-4 sm:mt-16">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl lg:max-w-lg">
                    <div className="text-2xl text-center mb-4 font-bold tracking-tight text-white sm:text-2xl">
                        {'Stay informed!'}
                    </div>
                </div>
                <div className="flex sm:ml-10 mb-4 sm:mb-10 flex-col sm:flex-row">
                    <label htmlFor="email-address" className="sr-only">
                        {'Email Address'}
                    </label>
                    <div className="flex justify-center">
                        <input
                            className="min-w-0 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            style={{width: 300}}
                            placeholder="Enter your email"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 sm:ml-4 sm:mt-0 flex-none rounded-md bg-cyan-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                    >
                    {'Subscribe'}
                    </button>
                </div>
            </div>
        </div>
    )
}
