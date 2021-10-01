import React from "react";
import styles from './Header.module.css';

export default function Header() {

    const mainStyle = { paddingLeft: '4%', paddingRight: '3%' };

    return (
        <div className={ styles.header }>
            <div className={ styles.container }>
                <div className={styles.brand}>HELSINGIN SANOMAT</div>
                <div style={mainStyle}>Uutiset</div>
                <div style={mainStyle}>Lehdet</div>
                <div style={mainStyle}>Tilaa</div>
                <div style={mainStyle}>Juho</div>
                <div style={mainStyle}>Hae</div>
                <div style={mainStyle}>Valikko</div>
            </div>
        </div>
    )
}