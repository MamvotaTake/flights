import './Card.scss'
export function Card() {
    return (
        <div className="Card">
            <div className="Card__header">
                <p className="Card__header-price">13 400 Р</p>
                <img src="../../../public/s7_logo.png" alt="logo" className="Card__header-logo-image"/>
            </div>
            <div className="Card__body">
                <div className="Card__body-details">
                    <p>
                        <span>MOW - HKT</span>
                        10:45 - 11:35
                    </p>
                    <p>
                        <span>В ПУТИ</span>
                        21ч 15м
                    </p>
                    <p>
                        <span>2 ПЕРЕСАДКИ</span>
                        HKG, JNB
                    </p>
                </div>
                <div className="Card__body-details">
                    <p>
                        <span>MOW - HKT</span>
                        10:45 - 11:35
                    </p>
                    <p>
                        <span>В ПУТИ</span>
                        21ч 15м
                    </p>
                    <p>
                        <span>2 ПЕРЕСАДКИ</span>
                        HKG, JNB
                    </p>
                </div>
            </div>
        </div>
    );
}