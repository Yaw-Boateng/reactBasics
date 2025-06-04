import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";
import IllustrationImg from "../assets/images/illustration-image.png";
import Spotify from "../assets/images/spotify.png"
import Google from "../assets/images/google.png"
import Stripe from "../assets/images/stripe.png"
import Youtube from "../assets/images/youtube.png"
import Microsoft from "../assets/images/microsoft.png"
import Medium from "../assets/images/medium.png"
import Zoom from "../assets/images/zoom.png"
import Uber from "../assets/images/uber.png"
import Grab from "../assets/images/grab.png"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    // declare state variables in react
    const [events, setEvents] = useState([]);

    // Define a function to fetch events from API
    const getEvents = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setEvents(response.data)
                console.table(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Run fetcher based on side effects 
    useEffect(getEvents, [])


    return (
        <>
            <Navbar />
            <section className="bg-[url('../assets/images/hero-bg.png')] h-[596px] bg-cover w-[95%] mx-auto relative mb-20">
                <h1 className="text-big-heading text-white w-[30%] mx-auto text-center pt-36">
                    MADE FOR THOSE WHO DO
                </h1>
                <form className="flex flex-row justify-between bg-navy-blue w-[90%] mx-auto py-8 px-12 rounded-md absolute -bottom-12 left-16">
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="type" className="text-white">Looking for</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md" defaultValue="">
                            <option value="" disabled>Choose event type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="location" className="text-white">Location</label>
                        <select name="location" id="location" className="bg-white p-2 rounded-md" defaultValue="">
                            <option value="" disabled>Choose location</option>
                            <option value="accra">Accra</option>
                            <option value="kumasi">Kumasi</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="when" className="text-white">When</label>
                        <input type="datetime-local" name="when" id="when" className="bg-white p-2 rounded-md" />
                    </div>
                    <button type="submit" className="bg-primary text-white size-[60px] flex justify-center items-center rounded-md">
                        <Search />
                    </button>
                </form>
            </section>


            <section className="w-[85%] mx-auto mt-20 mb-36">
                <div className="w-full mb-6 flex flex-row justify-between items-center">
                    <h1 className="text-big-heading font-bold ">
                        <span>Upcoming </span>
                        <span className="text-purple-500">Events</span>
                    </h1>
                    <form className="flex flex-row justify-between w-[40%] rounded-md">
                        <select
                            name="location"
                            id="location"
                            className="bg-[#687C940D] p-2 rounded-md"
                        >
                            <option selected disabled>
                                Choose location
                            </option>
                            <option value="accra">Accra</option>
                            <option value="kumasi">Kumasi</option>
                        </select>

                        <select
                            name="location"
                            id="location"
                            className="bg-[#687C940D] p-2 rounded-md"
                        >
                            <option selected disabled>
                                Choose location
                            </option>
                            <option value="accra">Accra</option>
                            <option value="kumasi">Kumasi</option>
                        </select>

                        <select
                            name="location"
                            id="location"
                            className="bg-[#687C940D] p-2 rounded-md"
                        >
                            <option selected disabled>
                                Choose location
                            </option>
                            <option value="accra">Accra</option>
                            <option value="kumasi">Kumasi</option>
                        </select>
                    </form>
                </div>
                <div className="grid grid-cols-3 gap-5 ">
                    {events.map(item => {
                        return (
                            <EventCard
                                key={item.id}
                                event={item} />
                        );
                    })}
                </div>
                <button className="bg-purple-500 px-8 py-2 rounded-md text-white font-medium my-8 block mx-auto">Load More...</button>
            </section>

            <section className="py-10">
                <div className="relative bg-[#10107B] px-16 flex justify-center items-center  mx-auto">

                    {/* Illustration Image */}
                    <div className="relative flex-shrink-0 w-[40%]">
                        <img
                            src={IllustrationImg}
                            alt="Illustration"
                            className="w-full -mt-20 object-contain"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-[30%] text-white pl-6">
                        <h2 className="text-big-heading font-bold leading-snug">
                            Make Your Own Event
                        </h2>
                        <p className="text-base mt-4">
                            Learn how to write, market, and publish your book in just 30 days with expert guidance.
                        </p>
                        <button className="bg-purple-500 px-8 py-2 rounded-md text-white font-medium my-8">Create Event</button>

                    </div>
                </div>
            </section>

            <section>

                <h1 className="text-big-heading">Join these <span className="text-purple-500 ">brands</span> </h1>
                <p className="tetx-paragraph">We've had the pleasure of working with industry-defining brands. These are just some of them.</p>
                <div>
                    <img src={Spotify} alt="Spotify" />
                    <img src={Google} alt="Google" />
                    <img src={Stripe} alt="Stripe" />
                    <img src={Youtube} alt="Youtube" />
                    <img src={Microsoft} alt="Microsoft" />
                </div>
                <div>
                    <img src={Medium} alt="Medium" />
                    <img src={Zoom} alt="Zoom" />
                    <img src={Uber} alt="Uber" />
                    <img src={Grab} alt="grab" />
                </div>


            </section>
            <Footer />
        </>
    );
}
