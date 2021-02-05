import { CHANGE_FILTER } from '../actions/constants';

const filterReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter.target.value;
    default: return 'All';
  }
};

export default filterReducer;
