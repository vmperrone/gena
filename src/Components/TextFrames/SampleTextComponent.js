import React from 'react';

const styles = {
  Wrapper: {
    display: 'inline-block'
  },
  FloatRightImage: {
    float: "right",
    maxWidth: '50%'
  }
};

const SampleTextComponent = () => {
  return (
    <div style={styles.Wrapper}>
      <h1>Thank you for reading!</h1>
      <img style={styles.FloatRightImage} src="https://i.pinimg.com/originals/8d/44/cb/8d44cbe8d661d91a8d8415298253a737.jpg" alt="genetic algorithm comic icon"/>
      <p>
        <p>
          <a href="https://www.patreon.com/user?u=34441473&fan_landing=true">Chapter 2 pages are available on Patreon! Link here: https://www.patreon.com/user?u=34441473&fan_landing=true</a>
        </p>
      </p>
    </div>
  )
}

export default SampleTextComponent;
