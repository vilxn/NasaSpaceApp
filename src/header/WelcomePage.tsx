import React from "react";
import styles from "./styles.module.css";

const WelcomePage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Nasa Weather app</h1>
        </div>
    );
};

export default WelcomePage;
