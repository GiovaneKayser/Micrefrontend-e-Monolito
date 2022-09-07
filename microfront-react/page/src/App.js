import React from 'react';
import Parcel from 'single-spa-react/parcel';
import "./index.css";
export default function App() {
    return (
        <>
            <main>
                <Parcel config={() => System.import('@Giovane/sidebar')}></Parcel>
                <div className='body'>
                    <Parcel config={() => System.import('@Giovane/article')}></Parcel>
                </div>
            </main>
            <footer className='footer'>
                 <Parcel config={() => System.import('@Giovane/footer')}></Parcel>
            </footer>
        </>
    )
}