import { CHANGE_FILTER } from '../actions/constants';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
    // do something here
      break;

    default: return 'All';
  }
  return state;
};

export default filterReducer;
