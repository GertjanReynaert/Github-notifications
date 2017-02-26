import { connect } from 'react-redux';
import Login from './view';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setBasicAuthentication: (username, password) => ({
    type: 'SET_ACCESS_TOKEN',
    payload: {
      username,
      password
    }
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
