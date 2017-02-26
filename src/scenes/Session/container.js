import { connect } from 'react-redux';
import Session from './view';

const mapStateToProps = state => ({
  accessToken: state.session.accessToken
});

export default connect(mapStateToProps)(Session);
