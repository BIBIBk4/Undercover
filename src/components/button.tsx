import Link from 'next/link';

export default function Button() {
    return(
    <Link href='/game'>
        <button className='bg-blue-500 text-white p-2 rounded-md'>Commencer la partie</button>
    </Link>
    );
}