import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ash');
  this.route('mahogany');
  this.route('cherry');
  this.route('ebony');
  this.route('mahogony');
  this.route('rainbow_burst');
  this.route('spikey');
  this.route('spotty');
  this.route('wavey');
  this.route('big_waves');
  this.route('diamond');
  this.route('blueprint');
  this.route('aquatic');
  this.route('spirals');
  this.route('radial_halftone');
  this.route('triangles');
  this.route('triangle');
  this.route('arches');
  this.route('weave');
  this.route('vertical_stripe');
  this.route('vertical_stripes');
  this.route('tartan');
  this.route('loose_plaid');
  this.route('tight_plaid');
  this.route('couch');
  this.route('biohazard');
  this.route('zigzag');
  this.route('cubes_up');
  this.route('cubes_down');
  this.route('argyle');
  this.route('starry');
  this.route('hex');
});

export default Router;
