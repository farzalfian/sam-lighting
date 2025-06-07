    import Link from 'next/link';
    import Image from 'next/image';
    import Navbar from './Navbar';
    import SearchBar from '../ui/SearchBar';

    export default function Header() {
    const whatsappNumber = "6281316640961";
    
    return (
        <header className="bg-black text-white">
        <div className="container mx-auto px-4">
            <div className="py-4 flex justify-between items-center">
            <Link href="/">
                <div className="flex items-center">
                <Image 
                    src="/images/logo.png" 
                    alt="SAM-LIGHTING" 
                    width={50} 
                    height={50} 
                />
                <div className="ml-2">
                    <span className="text-xl font-bold text-white">SAM</span>
                    <span className="text-xl font-bold text-yellow-500">-LIGHTING</span>
                </div>
                </div>
            </Link>
            
            <div className="flex items-center">
                <a 
                href={`tel:${whatsappNumber}`} 
                className="flex items-center mr-4"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {whatsappNumber}
                </a>
                
                <a 
                href={`https://wa.me/${whatsappNumber.replace('+', '')}`} 
                className="bg-yellow-500 text-black font-bold py-2 px-4"
                >
                ORDER SEKARANG
                </a>
            </div>
            </div>
            
            <div className="py-2 flex justify-between items-center">
            <Navbar />
            <SearchBar />
            </div>
        </div>
        </header>
    );
    }