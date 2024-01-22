import './Advert.scss';
export function Advert() {
    return (
        <div className="Advert">
            <img src="../../../public/advert.png" alt="advert"/>
            <div className='Advert__text'>
                <p>ПОДАРИТЬ АВИАБИБЛЕТ</p>
                <button>Share</button>
            </div>
        </div>
    );
}