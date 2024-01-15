import { HamburguerButtonMenu } from './hamburguer-button-menu';
import { Logo } from './logo';
import { MenuLinks } from './menu-links';
import { SmallDevicesMenu } from './small-devices-menu';

export function Header() {
    return (
        <header className="bg-primary z-50 relative">
            <div className="flex w-5/6 py-7 mx-auto max-w-screen-2xl md:justify-between md:items-center md:w-11/12 lg:w-3/4">
                <div className="flex-grow md:flex-grow-0">
                    <Logo />
                </div>
                <nav className="hidden md:flex">
                    <ul className="flex gap-9 text-h4 text-primary uppercase">
                        <MenuLinks />
                    </ul>
                </nav>
                <div className="flex items-center md:hidden">
                    <HamburguerButtonMenu />
                </div>
                <button className="hidden py-3 px-6 text-h4 bg-alt text-alt uppercase transition-all md:block hover:text-primary hover:bg-neutral">
                    Get an invite
                </button>
            </div>
            <SmallDevicesMenu>
                <MenuLinks />
            </SmallDevicesMenu>
        </header>
    );
}
