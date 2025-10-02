import { useState } from 'react';
import styles from './switch.module.css';
import { useEffect } from 'react';

function Switch({
    isOn = false,
    onChange
}) {
    let [on, setOn] = useState(false);

    useEffect(() => {
        setOn(isOn);
    }, [isOn]);

    return (
        <>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={on}
                    onChange={(event) => {
                        setOn(event.target.checked);
                        onChange?.(event.target.checked);
                    }}
                ></input>
                <span className={`${styles.slider} ${on ? styles.on : styles.off}`}></span>
            </label>
        </>
    );
}

export default Switch;