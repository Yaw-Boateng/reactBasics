import EventCardImg from '../assets/images/event-card.png'

export default function EventCard(){
    return (
        <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center'>
            <div className='relative w-full'>
            <img src={EventCardImg} alt="Event Card" className='w-full rounded-md'/>
            <button className='bg-white text-purple-500 text-sm px-4 py-2 rounded-md absolute top-2 left-2 shadow-md'>FREE</button>
            </div>
            <h1>BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</h1>
            <h2 className='my-4 text-sub-paragraph text-purple-500 self-start'>Saturday, March 18, 9.30PM</h2>
            <h3 className='self-start text-[#7E7E7E] text-sub-paragraph'>ONLINE EVENT - Attend anywhere</h3>
        </div>
    )
}