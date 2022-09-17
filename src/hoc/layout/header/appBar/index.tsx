import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { clsx } from 'clsx';

import { IconWrapper } from '@darkwilly08/icon-wrapper';

import styles from './appBar.module.scss';

const pages = [
  {
    name: 'Inicio',
    target: '#start',
  },
  {
    name: 'Nosotros',
    target: '#aboutUs',
  },
  {
    name: 'Productos y servicios',
    target: '#productsAndServices',
  },
];

export function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/assets/techinside-icon.png" alt="logo" className={styles['app-bar__logo']} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TECH INSIDE
          </Typography>

          <div className={clsx({ [styles['app-bar__menu']]: true, [styles['app-bar__menu--flat']]: true })}>
            {pages.map((page) => (
              <a className={styles['app-bar__menu__item']} href={page.target}>
                <MenuItem key={page.name}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              </a>
            ))}
          </div>

          <Box className={clsx({ [styles['app-bar__menu']]: true, [styles['app-bar__menu--with-icon']]: true })}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <IconWrapper name="menu" className={styles['app-bar__menu__icon']} />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((page) => (
                <a className={styles['app-bar__menu__item']} href={page.target}>
                  <MenuItem key={page.name} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
