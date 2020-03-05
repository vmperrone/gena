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
      <h1>Sample Text Here</h1>
      <img style={styles.FloatRightImage} src="/images/sample.png" alt="sample"/>
      <p>
        <p>
          Paragraph one sample text would go here. This can be a longer paragraph. We can have links in it:
          <a href="https://www.google.com">Google</a>
        </p>
        <p>
          Another sample paragraph of text that could go here
        </p>
      </p>
    </div>
  )
}

export default SampleTextComponent;