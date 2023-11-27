import React, { useEffect, useState } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";

const NavBar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <MDBNavbar className="bg-gradient-to-r from-red-500 to-red p-4">
      <MDBContainer fluid>
        <MDBNavbarBrand className="text-red text-lg font-bold">Dil Foods</MDBNavbarBrand>

        {/* Navigation Links */}
        <div className={`md:flex ${isMobileMenuOpen ? 'flex-col' : 'flex-row'}`}>
          <span className="text-red-500 hover:text-red 600 mr-4">
            <Link to="/" onClick={toggleMobileMenu}>
              All Products
            </Link>
          </span>

          <MDBBtn color="red">
            <Link to="/cart" className="text-red-500 hover:text-red bg-rose-lighter" onClick={toggleMobileMenu}>
              <MDBIcon icon="shopping-cart" className="mr-2" />
              Cart ({totalQuantity})
            </Link>
          </MDBBtn>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
