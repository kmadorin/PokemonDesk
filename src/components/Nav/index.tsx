import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import Logo from '../../assets/images/svg/Logo.svg';

import classes from './Nav.module.scss';
import { GENERAL_MENU } from '../../routes';

interface Props {
  open: boolean;
}

const Nav: React.FC<Props> = ({ open }: Props) => {
  const path = usePath();

  return (
    <nav className={cn(classes.nav, { [classes.open]: open })}>
      <img className={classes.logo} src={Logo} alt="Pokemon" />

      <ul className={classes.list}>
        {GENERAL_MENU.map(({ title, link }) => (
          <li key={title}>
            <A href={link} className={cn(classes.link, { [classes.linkActive]: link === path })}>
              {title}
            </A>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
