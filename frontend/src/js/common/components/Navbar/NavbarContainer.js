import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/login';
import Navbar from './Navbar';


const ms2p = (state) => {
  return {
    ...state.login,
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(Navbar);
