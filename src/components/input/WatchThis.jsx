import React from "react";
import styles from '../../assets/scss/components/input/WatchThis.module.scss';

const WatchThis = () => {
    const youtubeSrc = "https://www.youtube.com/embed/4KR4Lwr1El8?autoplay=1&vq=highres&mute=1&si=BzmMS5p0wH5GIwR1";

    return (
        <div className={styles.wrapper}>
            <input type="checkbox" />
            <div className={styles.video}>
                <iframe
                    width="100%"
                    height="100%"
                    src={youtubeSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className={styles.text}>
                <span data-text="Vidéo à regarder"></span>
            </div>
        </div>
    );
};

export default WatchThis;
