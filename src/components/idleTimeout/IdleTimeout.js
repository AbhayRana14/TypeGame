import React, { useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useSelector } from 'react-redux';

const IdleTimeout = ({ children }) => {
  // const dispatch = useDispatch();
  const userStatus = useSelector((state) => state?.userReducer);

  const handleLogout = () => {
    // dispatch(logoutAction());
  };

  const { pause, resume } = useIdleTimer({
    timeout: 1000 * 60 * 15,
    onIdle: handleLogout,
    debounce: 500,
  });

  useEffect(() => {
    if (userStatus?.isUserVerified) {
      resume();
    } else {
      pause();
    }
  }, [userStatus?.isUserVerified]);

  return <>{children}</>;
};

export default IdleTimeout;
