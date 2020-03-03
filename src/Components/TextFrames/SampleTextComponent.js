import React from 'react';

const styles = {
  Paper: {
    backgroundColor: "transparent",
    height: "105vh",
    display: "flex",
    alignItems: "center"
  },
};

const SampleTextComponent = () => {
  return (
    <div>
      <h1>Sample Text Here</h1>
      <p>
        Paragraph one sample text would go here. This can be a longer paragraph. We can have links in it:
        <a href="https://www.google.com">Google</a>
      </p>
    </div>
  )
}

export default SampleTextComponent;