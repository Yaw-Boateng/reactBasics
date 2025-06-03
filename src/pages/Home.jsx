import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";

export default function Home() {
    return (
        <>
            <Navbar />
            <section className="bg-[url('.\assets\images\heroBg.png')] h-[596px] bg-cover w-[95%] mx-auto relative">
                <h1 className="text-big-heading text-white w-[30%] mx-auto text-center pt-36">MADE FOR THOSE WHO DO</h1>
                <form className="flex flex-row justify-between bg-navy-blue w-[90%] mx-auto py-6 px-12 rounded-md absolute -bottom-12 left-16">
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="type" className="text-white">Looking for</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md">
                            <option selected disabled>Choose event type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="location" className="text-white">Location</label>
                        <select name="location" id="location" className="bg-white p-2 rounded-md">
                            <option selected disabled>Choose location</option>
                            <option value="accra">Accra</option>
                            <option value="kumasi">Kumasi</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="when" className="text-white">When</label>
                        <input type="datetime-local" name="when" id="when" className="bg-white p-2 rounded-md" />

                    </div>
                    <div className="bg-primary text-white size-[60px] flex flex-row justify-center items-center rounded-md">
                        <Search />
                    </div>
                </form>


            </section>
            <section>
                <div>
                    <h1>
                        <span>Upcoming</span>
                        <span>Events</span>
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-5 ">
                    {[1,2,3,4,5,6].map(n => <EventCard key={n} />)}
                </div>
            </section>
            <section className="h-[500px]">
            </section>

            <Footer />
        </>
    )
}