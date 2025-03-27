import { SITE_INFO } from "@/data/site";
import Logo from "./logo";
import { FOOTER_LINKS, FOOTER_LINKS_LEGAL } from "@/data/site";
import { SOCIAL_LINKS } from "@/data/site";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { all } from "@awesome.me/kit-654a0ecbfd/icons";

library.add(...all);

interface FooterLinkCategory {
    category: string;
    links: FooterLink[];
}

interface FooterLink {
    title: string;
    href: string;
}

interface LinkIconProp {
    icon: string;
    href: string;
    title: string;
}

const Footer = () => {

    return (
        <>
            <footer className="footer sm:footer-horizontal bg-neutral-500 text-base-500 p-10">
                <div className="container grid gap-8 place-items-start md:grid-cols-2 lg:grid-cols-4">
                    <div className="footer-content">
                        <Logo showText={true} className="text-2xl"/>
                        <p className="mt-2 text-base-500">{SITE_INFO.Description}</p>
                        <div className="mt-4 flex space-x-4">
                            {SOCIAL_LINKS.map((link: LinkIconProp) => (
                                <a key={link.href} href={link.href} aria-label={link.title} target="_blank" rel="noopener noreferrer" className="hover:text-primary" >
                                    <FontAwesomeIcon icon={link.icon as IconProp} size="lg"/>
                                </a>
                            ))}
                        </div>
                    </div>
                    {FOOTER_LINKS.map((category: FooterLinkCategory) => (
                        <div key={category.category} className="footer-content">
                            <h3 className="text-xl font-bold text-base-700">{category.category}</h3>
                            <ul className="mt-2">
                                {category.links.map((link: FooterLink) => (
                                    <li key={link.href}>
                                        <a href={link.href} className="text-lg hover:text-base-700">{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
            <footer className="footer bg-neutral-500 text-base-500 p-10 border-t border-base-800 px-10 py-4">
                <div className="w-6xl mx-auto">
                    <ul className="grid grid-cols-4 place-items-center gap-4">
                        <li>© {new Date().getFullYear()} Brandon Korous. All rights reserved.</li>
                        {FOOTER_LINKS_LEGAL.map((link: FooterLink) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-base-700">{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;