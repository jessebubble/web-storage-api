import { Container } from '../Container';
import { Border } from '../Border';
import { FadeIn } from '../FadeIn';
import { LightBulbIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useState } from 'react';
import { createApi } from 'unsplash-js';


const unsplash = new createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
});
        
export function WebStorageExample() {
    const [backgroundColor, setBackgroundColor] = useState(
        localStorage.getItem('backgroundColor') || '#ffffff'
    );
    const [fontColor, setFontColor] = useState(
        localStorage.getItem('fontColor') || '#000000'
    );
    const [randomImageURL, setRandomImageURL] = useState(
        localStorage.getItem('randomImageURL') || ''
    );

    const handleBackgroundColorChange = (event) => {
        const color = event.target.value;
        setBackgroundColor(color);
        localStorage.setItem('backgroundColor', color);

        console.log('Background color saved to local storage');
    };

    const handleFontColorChange = (event) => {
        const color = event.target.value;
        setFontColor(color);
        localStorage.setItem('fontColor', color);

        console.log('Font color saved to local storage');
    };

    const handleRandomImageChange = () => {
        unsplash.photos.getRandom({ query: 'nature' }).then((result) => {
            if (result.errors) {
                console.log('error occurred: ', result.errors[0]);
            } else {
                const randomImageURL = result.response.urls.regular;
                setRandomImageURL(randomImageURL);
                localStorage.setItem('randomImageURL', randomImageURL);

                console.log('Random image saved to local storage');
            }
        });
    };

    return (
        <Container className="mt-40">
            <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                    Web Storage API examples
                </h2>
            </FadeIn>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <FadeIn>
                    <article>
                        <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                            <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                                    <LightBulbIcon className="h-12 w-12 flex-none text-neutral-950" />
                                    <h3 className="mt-6 flex items-center text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                                        Session and Local Storage
                                    </h3>
                                </div>
                                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                                        Saving data on the client side
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                                <p className="font-display text-4xl font-medium text-neutral-950">
                                    Local Storage Playground
                                </p>
                                <div 
                                    className="flex flex-col w-full items-center justify-center rounded-lg border bg-cosa-white p-6 mt-6 space-y-6 text-base text-neutral-600"
                                    style={{
                                        backgroundColor: backgroundColor,
                                    }}
                                >
                                    <p
                                        className="text-base text-neutral-950"
                                        style={{
                                            color: fontColor,
                                        }}
                                    >
                                        In this example, we use the Web Storage API to save the user&rsquo;s local updates to the background color, font color, and fetched image from the Unsplash API. 
                                        These changes are saved to local storage, so they persist even if the user closes the browser window and comes back later.
                                    </p>
                                    <p className="text-base text-white">
                                        <span className="font-bold">Hint:</span> Open the console to see what&rsquo;s happening behind the scenes
                                    </p>
                                    <div className="mt-8 flex items-center justify-evenly w-full">
                                        <form className="">
                                            <div className="flex flex-col items-center justify-center gap-y-2">
                                                <label htmlFor="background-color" className="sr-only">
                                                    Choose a background color
                                                </label>
                                                <input
                                                    id="background-color"
                                                    type="color"
                                                    value={backgroundColor}
                                                    onChange={handleBackgroundColorChange}
                                                    className='rounded-lg w-full h-16 sm:w-32 sm:h-16'
                                                />

                                                <label htmlFor="font-color" className="sr-only">
                                                    Choose a font color
                                                </label>
                                                <input
                                                    id="font-color"
                                                    type="color"
                                                    value={fontColor}
                                                    onChange={handleFontColorChange}
                                                    className='rounded-lg w-full h-16 sm:w-32 sm:h-16'
                                                />

                                                <label htmlFor="random-image" className="sr-only">
                                                    Choose a random image from the Unsplash API
                                                </label>
                                                <button
                                                    id="random-image"
                                                    type="button"
                                                    onClick={handleRandomImageChange}
                                                    className='rounded-lg w-full h-16 sm:w-32 sm:h-16 bg-neutral-950 text-white font-semibold'
                                                >
                                                    {randomImageURL ? 'Change image' : 'Get image'}
                                                </button>
                                            </div>
                                        </form>
                                        <div 
                                            className="flex-none rounded-lg w-48 h-48"
                                            style={{
                                                backgroundImage: `url(${randomImageURL})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        >
                                            <img
                                                src={randomImageURL}
                                                alt=""
                                                className={clsx(
                                                    'rounded-lg w-full h-32',
                                                    randomImageURL ? 'opacity-0' : 'opacity-100',
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Border>
                    </article>
                </FadeIn>
            </div>
        </Container>
    );
}