import CONSTANTS from '../constants.js';

const EMPTY_USER_TEMPLATE = {
  status: CONSTANTS.statuses[0],
  source: '',
  gender: '',
  homeWard: '',
  fheGroup: '',
  imageUrl: '',
  infotext: '',
  assignedCaller: '',
  preferredContactType: '',
  preferredContactValue: '',
  individualPhone: '',
  individualEmail: '',
  householdPhone: '',
  householdEmail: '',
  notifyHomeEvening: false,
  notifyWardActivity: false,
  notifiedFacebook: false,
};

function genDocBase(type, name) {
  return {
    _id: new Date().toISOString(),
    type: type,
    name: name,
  };
}

function applyChangeset(original, patch) {
  return { ...original, ...patch };
}

function sortByName(l) {
  console.log('SORT CALLED');
  l.sort((c, n) => {
    return c.name.localeCompare(n.name);
    // console.log('SORT', currentLast, nextLast, diff);
  });
  return l;
}

export { EMPTY_USER_TEMPLATE, genDocBase, applyChangeset, sortByName };
