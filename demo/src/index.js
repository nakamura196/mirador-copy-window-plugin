import Mirador from 'mirador/dist/es/src/index';
import miradorCopyWindowPlugins from '../../src';

const config = {
  id: 'demo',
  miradorCopyWindowPlugin: {
    restrictCopyWindowOnSizeDefinition: true,
  },
  windows: [{
    loadedManifest: 'https://www.hi.u-tokyo.ac.jp/collection/digitalgallery/ryukyu/data/iiif/0001/manifest.json',
  }],
};

Mirador.viewer(config, [
  ...miradorCopyWindowPlugins,
]);
