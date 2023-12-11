import Link from "next/link";

export default function Navbar () {
    return (
        <div className="flex justify-between
        pb-4 mb-4 border-b">
            <div>
                <Link href={'/'}>
                    <h1 className="text-dark text-4xl font-bold
                    tracking-tighter">
                        Next JS Blog</h1>
                </Link>
                <p className="text-sm">
                    Using MongoDB, this news tech blog <br/> 
                    is created using Next JS, by Aldo L.S.</p>
            </div>
            <div className="flex items-center">
                <Link className="btn" href={'/sign-in'}>
                    Sign In
                </Link>
            </div>
        </div>
    )
}