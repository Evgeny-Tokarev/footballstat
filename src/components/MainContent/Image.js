import React, { useState } from "react";
const Image = ({ src, srcOnError, ...rest }) => {
  const [srcImg, setSrcImg] = useState(null);
  const onError = () => {
    setSrcImg(srcOnError);
  };
  if (!srcOnError) {
    // eslint-disable-next-line
    return <img src={src} {...rest} />;
  }

  if (srcImg) {
    // eslint-disable-next-line
    return <img src={srcImg} {...rest} />;
  }
  if (src) {
    // eslint-disable-next-line
    return <img src={src} onError={onError} {...rest} />;
  } else {
    setSrcImg(srcOnError);
  }
};

export default Image;
