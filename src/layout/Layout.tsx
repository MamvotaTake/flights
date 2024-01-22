import './Layout.scss';
import {Filter} from "../components/Filter";
import {Main} from "../components/Main";
import {Logo} from "../components/Logo";
import {Advert} from "../components/Advert";
export function Layout() {
    return (
        <>

            <div className="Container">
                <Logo/>
                <div className="Container__layout">
                    <div className="Container__layout-filter">
                        <Filter/>
                        <Advert/>
                    </div>
                    <Main/>
                </div>
            </div>
        </>
    );
}