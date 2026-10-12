import Banner from "@/Component/Banner";
import Marquee from "@/Component/Marquee";
import IncreaseProduct from "@/Component/IncreaseProduct";
import DeccreaseProduct from "@/Component/DeccreaseProduct";
import AllProducts from "@/Component/AllProducts";
export default function Home() {
    return (
        
        
        <main className="min-h-screen bg-[#eef7f0]">
            <div className="bg-white">
            <Marquee />
            </div>
            <Banner />
            <IncreaseProduct />
            <DeccreaseProduct />
            <AllProducts />
        </main>

    )
}
