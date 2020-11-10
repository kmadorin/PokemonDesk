import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  size?: 'small' | 'default';
  color?: 'yellow' | 'blue';
  fullWidth?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth = false, color, size = 'default' }) => {
  return (
    <button
      type="button"
      className={cn(
        s.root,
        fullWidth && s.fullWidth,
        color === 'yellow' ? s.yellow : s.blue,
        size === 'small' && s.small,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
