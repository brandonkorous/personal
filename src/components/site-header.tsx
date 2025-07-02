"use client";

import { usePathname } from "next/navigation";
import { faBars, faEnvelope } from "@awesome.me/kit-654a0ecbfd/icons/classic/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Logo from "./logo";

const Header = () => {
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href ? "border-primary text-primary hover:text-neutral" : "border-transparent hover:border-accent";
    };

    return (
        <header className="sticky top-0 left-0 w-full bg-base-500/80 font-coiny text-neutral text-xl backdrop-blur-md shadow-sm z-10">
            <div className="container">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-accent lg:hidden">
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                            <ul className="menu menu-md dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link href="/" className={`line border-b-4 ${isActive("/")}`}>Home</Link></li>
                                <li><Link href="/about" className={`border-b-4 ${isActive("/about")}`}>About</Link></li>
                                <li><Link href="/services" className={`border-b-4 ${isActive("/services")}`}>Services</Link></li>
                                <li><Link href="/portfolio" className={`border-b-4 ${isActive("/portfolio")}`}>Portfolio</Link></li>
                                <li><Link href="/blog" className={`border-b-4 ${isActive("/blog")}`}>Blog</Link></li>
                                <li>
                                    <Link href="/contact" className="btn btn-primary rounded-full font-normal text-nowrap pt-1">
                                        <FontAwesomeIcon icon={faEnvelope} className="-mt-1" />
                                        Get In Touch
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Logo />
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <nav className="flex gap-6 mt-2 me-6">
                            <Link href="/" className={`line border-b-4 ${isActive("/")}`}>Home</Link>
                            <Link href="/about" className={`border-b-4 ${isActive("/about")}`}>About</Link>
                            <Link href="/services" className={`border-b-4 ${isActive("/services")}`}>Services</Link>
                            <Link href="/portfolio" className={`border-b-4 ${isActive("/portfolio")}`}>Portfolio</Link>
                            <Link href="/blog" className={`border-b-4 ${isActive("/blog")}`}>Blog</Link>
                        </nav>
                        <nav>
                            <Link href="/contact" className="btn btn-primary btn-lg rounded-full font-normal text-nowrap pt-1">
                                <FontAwesomeIcon icon={faEnvelope} className="-mt-1" />
                                Get In Touch
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;