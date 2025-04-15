import { useCart } from '../../context/CartContext';
import Logo from '../Logo';
import HeaderNav from '../HeaderNav';
import CartIcon from '../ui/icons/CartIcon';
import FavouritesIcon from '../ui/icons/FavouritesIcon';
import ProfileIcon from '../ui/icons/ProfileIcon';

const Header = () => {
  const { setCartVisibility, cartItems } = useCart()

  return (
    <header className="header container">
      <Logo />
      <HeaderNav items={[
        {
          icon: <CartIcon />, 
          label: cartItems.length > 0 ? `${cartItems.reduce((sum, item) => sum + item.price, 0)} руб.` : "Корзина", 
          type: "button",
          onClick: (() => setCartVisibility(true))},
          {icon: <FavouritesIcon />, label: 'Закладки', href: "/favourites"},
          {icon: <ProfileIcon />, label: 'Профиль', href: "/orders"}
      ]} />
    </header>
  );
};

export default Header;
