import { Buffer } from 'buffer';

const initialState = {
  accessToken: undefined
};

export default (state = initialState, action) => {
  if (action.type === 'SET_ACCESS_TOKEN') {
    const { username, password } = action.payload;
    const tokenBuffer = new Buffer(`${username}:${password}`);
    const token = tokenBuffer.toString('base64');

    return {
      accessToken: `basic ${token}`
    };
  }

  return state;
};
