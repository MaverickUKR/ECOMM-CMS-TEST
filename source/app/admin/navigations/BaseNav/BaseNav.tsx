import {
  HomeIcon,
  WorkIcon,
  PersonIcon,
  ProductIcon,
  OrderIcon,
} from '@shopify/polaris-icons';
import { EAdminNavigation } from '~/admin/constants/navigation.constant';
import { NavLink } from '@remix-run/react';
import { CSSProperties } from 'react';

const navLinkStyle = (isActive: boolean): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  textDecoration: 'none',
  borderRadius: '8px',
  color: 'rgb(48, 48, 48)',
  backgroundColor: isActive ? 'white' : 'lightgray',
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  fontSize: '13px',
  fontWeight: 700,
  letterSpacing: 'normal',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  width: '200px',
});

const iconStyle: CSSProperties = {
  width: '20px',
  height: '20px',
  marginRight: '8px',
};

export const BaseNav = () => {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'lightgray',
        padding: '0 20px',
        paddingTop: '16px',
      }}
    >
      <NavLink
        to={EAdminNavigation.dashboard}
        style={({ isActive }) => navLinkStyle(isActive)}
      >
        <HomeIcon style={iconStyle} />
        Home
      </NavLink>
      <NavLink
        to={EAdminNavigation.users}
        style={({ isActive }) => navLinkStyle(isActive)}
      >
        <WorkIcon style={iconStyle} />
        Users
      </NavLink>
      <NavLink
        to={EAdminNavigation.customers}
        style={({ isActive }) => navLinkStyle(isActive)}
      >
        <PersonIcon style={iconStyle} />
        Customers
      </NavLink>
      <NavLink
        to={EAdminNavigation.products}
        style={({ isActive }) => navLinkStyle(isActive)}
      >
        <ProductIcon style={iconStyle} />
        Products
      </NavLink>
      <NavLink
        to={EAdminNavigation.orders}
        style={({ isActive }) => navLinkStyle(isActive)}
      >
        <OrderIcon style={iconStyle} />
        Orders
      </NavLink>
    </nav>
  );
};
