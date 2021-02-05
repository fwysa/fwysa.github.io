import DB_INSTANCE from './db.js';
import { v4 as uuid } from '../../web_modules/uuid.js';
import CONSTANTS from '../constants.js';

const EMPTY_USER_TEMPLATE = {
  status: CONSTANTS.statuses[0],
  name: '',
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

function genID() {
  return uuid();
}

function genTimestamp() {
  return new Date().toISOString();
}

function genDocBase(type) {
  return {
    _id: genID(),
    type: type,
    created: genTimestamp(),
  };
}

function applyChangeset(original, patch) {
  return { ...original, ...patch };
}

function sortByName(l) {
  console.log('SORT CALLED');
  l.sort((c, n) => {
    const cs = c.name.split(' ');
    const ns = n.name.split(' ');
    const cn = cs[cs.length - 1];
    const nn = ns[ns.length - 1];

    return cn.localeCompare(nn);
    // console.log('SORT', currentLast, nextLast, diff);
  });
  return l;
}

function sortListByName(l) {
  console.log('SORT LIST CALLED');
  l.sort((c, n) => {
    const cs = c.split(' ');
    const ns = n.split(' ');
    const cn = cs[cs.length - 1];
    const nn = ns[ns.length - 1];
    return cn.localeCompare(nn);
    // console.log('SORT', currentLast, nextLast, diff);
  });
  return l;
}

function nameToID(name) {
  return DB_INSTANCE.matrixReady.then(() => {
    return DB_INSTANCE.nameIDMatrix[name];
  });
}

function IDToName(id) {
  return DB_INSTANCE.matrixReady.then(() => {
    return DB_INSTANCE.IDNameMatrix[id];
  });
}

function mapIDToName(ids) {
  return Promise.all(ids.map((i) => IDToName(i)));
}

function mapNameToID(names) {
  return Promise.all(names.map((n) => nameToID(n)));
}

function usePromise(p, def) {
  const [val, setVal] = useState(def);
  useEffect(() => {
    p.then((r) => {
      setVal(r);
    });
  }, [p]);
  return val;
}

export {
  genID,
  genTimestamp,
  EMPTY_USER_TEMPLATE,
  genDocBase,
  applyChangeset,
  sortByName,
  sortListByName,
  nameToID,
  IDToName,
  mapIDToName,
  usePromise,
};
