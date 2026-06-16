import { navLinks } from "../constants";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/public/logo.svg" alt="pixelbox logo" />

        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div>
          <button>
            <img src="/public/search.svg" alt="search" />
          </button>
          <button>
            <img src="/public/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};
