import React from 'react';
import { Transition } from 'react-transition-group';
import Avatar from '../Avatar/Avatar';

const AvatarTransition = ({ in: inProp }) => {
  const duration = 2000;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <Avatar size="large" />
        </div>
      )}
    </Transition>
  );
};

export default AvatarTransition;
