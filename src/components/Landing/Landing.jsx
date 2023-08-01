import Logo from "../../assets/wigo.png"
import LandingImg from "../../assets/wigo-landing.png"
import twitter from "../../assets/twitter.svg"
import discord from "../../assets/discord.svg"
const Landing = () => {
  return (
    <div className="bg-gradient-to-br from-white to-[#E2E8FC]  h-[100vh] font-inter">
        <nav className="flex justify-between p-5 font-inter">
            <div className="flex justify-start w-[70%]">
                <img src={Logo} alt="" />
                <a href="#" className="ml-3 font-bold">WigoCash</a>
            </div>
            <div className="flex justify-evenly w-[20%]">
            <a href="#" className="font-bold">FAQ</a>
            <a href="#" className="font-bold">Docs</a>
            </div>
        </nav>
        <hr />
        <section className="flex mt-5 ml-20 font-inter">
            <div className="w-[60%]">
                <h1 className="text-6xl font-bold mt-20 leading-[1.25] w-[80%]">Revolutionizing the way we transact in digital economy.</h1>
                <p className="mt-10">Send a link and get paid with any token.</p>
                <div className="mt-10 border-2 border-[#7e818180] rounded-lg w-[50%] p-2 flex justify-between font-inter">
                <input type="text" className="w-[65%] p-2 mix-blend-multiply text-opacity-100" placeholder="Enter your email" /><button className="bg-[#3396FF] p-2 rounded-lg text-white">Join the Waitlist</button>
                </div>
            </div>
            <div>
                <img src={LandingImg} alt="landing image" width={400} className="drop-shadow-lg"/>
            </div>
        </section>
        <div className="flex justify-center mt-10 space-x-10">
            <a href="#"><img src={twitter} alt="twitter" width={30} /></a>
            <a href="#"><img src={discord} alt="twitter" width={30} /></a>
        </div>
    </div>
  )
}

export default Landing