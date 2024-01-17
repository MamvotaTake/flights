import './Layout.scss';
import {Filter} from "../components/Filter";
import {Main} from "../components/Main";
import {Logo} from "../components/Logo";
export function Layout() {
    return (
        <>

            <div className="Container">
                <Logo/>
                <div className="Container--layout">
                    <Filter/>
                    <Main/>
                </div>
            </div>
        </>
    );
}