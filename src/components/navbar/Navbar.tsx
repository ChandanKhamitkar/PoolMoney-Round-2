export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 px-10 lg:px-20 pt-8 select-none flex items-center justify-center space-x-3">
            <p className="text-white text-2xl font-semibold">PoolMoney</p>
            <img src="/gold-rupee-coin.png" alt="BillBot Image" className="w-8 h-8 animate-pulse" />
        </nav>
    )
};
