import './Main.scss';
import {Card} from "../Card";
import {Navigation} from "../Navigation";
export function Main() {
    return (
        <div className="main">
            <Navigation/>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}