import React from 'react';


function TimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeOfDay = "morning";
        styles.color = "#04756F";
    } else if (hours >= 12 && hours < 18) {
        timeOfDay = "afternoon";
        styles.color = "#D90000";
    } else {
        timeOfDay = "night";
        styles.color = "#2E0927"
    }

    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

export default TimeOfDay;