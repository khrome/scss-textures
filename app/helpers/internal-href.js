import { helper } from '@ember/component/helper';

export default helper(function internalHref(params/*, hash*/){
  return document.location.origin+'/#/'+params[0];
});
