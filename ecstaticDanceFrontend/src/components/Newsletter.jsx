import { useState } from "react";

const validateEmail = (email) => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email)
};



export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errored, setErrored] = useState(false);
    const [touched, setTouched] = useState(false);

    const isValidEmail = validateEmail(email);

    const getInfoText = () => {
        if (!touched) return null;
        
        if (errored) return 'Subscribing failed! Please contact us via email';
        if (success) return 'Subscribed successfully!';
        if (!isValidEmail) return 'Invalid email';
    }

    const buttonClassBase = 'mt-4 sm:ml-4 sm:mt-0 flex-none rounded-md shadow-sm px-3.5 py-2.5 text-sm font-semibold ';
    const buttonClassColor = isValidEmail
        ? 'text-white bg-cyan-900 hover:bg-cyan-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500'
        : 'text-slate-200 bg-cyan-900';

    const buttonClass = buttonClassBase + buttonClassColor;

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    const handleBlur = () => {
        setTouched(true);
    }

    const data = {
        access_token: "pc29enwcvxnoyc60gt4rmtve",
        subject: `New Subscription: ${email}`,
        text: `${email} wants to subscribe to the Ecstatic Dance Newsletter!`
    };

    function toParams(data) {
        const form = [];
        for ( const key in data ) {
            form.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
        }

        return form.join("&");
    }

    const sendEmail = () => {
        setLoading(true);

        const request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            setLoading(false);

            if (request.readyState == 4 && request.status == 200) {
                console.log('Success');
                setSuccess(true);
            } else if(request.readyState == 4) {
                console.error(request.response);
                setErrored(true);
            }
        };

        const params = toParams(data);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(params);
    }

    return (
        <div className="flex justify-center m-4 sm:mt-16">
            <div className="flex flex-col mb-4 sm:mb-10 ">
                <div className="flex flex-col lg:flex-row">
                    <div className="max-w-xl lg:max-w-lg">
                        <div className="text-2xl text-center mb-4 font-bold tracking-tight text-white sm:text-2xl">
                            {'Stay informed!'}
                        </div>
                    </div>
                    <div className="flex sm:ml-10 flex-col sm:flex-row">
                        <label htmlFor="email-address" className="sr-only">
                            {'Email Address'}
                        </label>
                        <div className="flex flex-col justify-center">
                            <input
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
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
                            disabled={!isValidEmail || loading || success || errored}
                            onClick={ sendEmail }
                            className={ buttonClass }
                        >
                            {success ? 'Success' : 'Subscribe'}
                        </button>
                    </div>
                </div>
                <div className="flex h-4 text-sm justify-center flex-row text-red-500">
                    {getInfoText()}
                </div>
            </div>
        </div>
    )
}
