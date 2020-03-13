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
      <img style={styles.FloatRightImage} src="https://i.pinimg.com/originals/8d/44/cb/8d44cbe8d661d91a8d8415298253a737.jpg" alt="sample"/>
      <p>
        <p>
          Stay tuned for chapter 2.
        </p>
        <p>
          In the meantime, please check out the Kickstarter! The rewards are some cute keychains :)
        </p>
      </p>
    </div>
  )
}

export default SampleTextComponent;
