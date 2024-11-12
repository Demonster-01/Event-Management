import React, { useState } from "react";
import ReactSlider from "react-slider";
import styles from "../module_css/Filter_service.module.css";

export default function Filter_service() {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(5000);

  // Handle changes in dual range input
  const handleRangeChange = ([newMin, newMax]) => {
    setMinValue(newMin);
    setMaxValue(newMax);
  };

  return (
    <>
      <section className={styles.filter_section}>
        <div className={styles.filters}>
          <div className={styles.range}>
            <label>Min Price: {minValue}</label>
            <label>Max Price: {maxValue}</label>
            <ReactSlider
              className={styles.rangeSlider}
              min={300}
              max={2800}
              value={[minValue, maxValue]}
              onChange={handleRangeChange}
              pearling
              minDistance={10}
              renderTrack={(props, state) => (
                <div {...props} className={styles.track}>
                  <div
                    className={`${styles.trackFilled} ${
                      state.index === 1
                        ? styles.trackFilledLeft
                        : styles.trackFilledRight
                    }`}
                    style={{
                      width: `${
                        ((state.valueNow[1] - state.valueNow[0]) /
                          (state.max - state.min)) *
                        100
                      }%`,
                    }}
                  />
                </div>
              )}
              renderThumb={(props, state) => (
                <div {...props} className={styles.thumb}>
                  {state.valueNow}
                </div>
              )}
            />
          </div>
        </div>
      </section>
    </>
  );
}
