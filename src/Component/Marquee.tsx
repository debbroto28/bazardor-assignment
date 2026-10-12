import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface marquee {
    id: string;
    nameBn: string;
    categoryIcon: string;
    today: string;
    change: string;
}
const Marquee = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const data: marquee[] = await res.json()
    console.log(data);
    return (
        <div className="flex ">
            <MarqueeText direction="right" duration={8}>

                {data.map(h => <span key={h.id}>
                    <div className="w-max border-y border-slate-200">

                    <div className='flex shrink-0 items-center gap-3 border-r border-slate-100 px-5 py-3'>
                        <span>{h.categoryIcon}</span>
                        <span className="font-medium text-gray-800">{h.nameBn}</span>
                        <span className="text-gray-700">{h.today} টাকা/কেজি</span>           
                        <span
                            className={`inline-flex items-center gap-1 font-semibold ${h.change.dir === 'up'
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}
                            >
                            <span>
                                {h.change.dir === 'down' ? '▼' : '▲'}
                            </span>
                            <span>{h.change.pct}%</span>
                        </span>
                    </div>
                    </div>
                </span>
                )}
            </MarqueeText>
        </div>
    );
};

export default Marquee;

