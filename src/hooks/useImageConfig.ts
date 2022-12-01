import React from 'react';

import { getImageConfig } from '../util/services/images';
import { ImageConfig } from '../util/types/images';

export const useImageconfig = () => {
  const [imageConfig, setImageConfig] = React.useState<ImageConfig>();

  const controller = new AbortController();

  const getImageData = async () => {
    const imageData = await getImageConfig(controller.signal);
    setImageConfig(imageData);
  };

  React.useEffect(() => {
    getImageData();
    return () => {
      controller.abort();
    };
  }, []);

  return imageConfig;
};
