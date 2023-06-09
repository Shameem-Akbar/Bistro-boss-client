import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaCartPlus, FaCommentDots, FaBookmark, FaBars, FaShoppingBag, FaPhoneSquareAlt } from 'react-icons/fa';
import useCart from "../../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 space-y-3 uppercase">

                    <NavLink
                        to="/dashboard/user-home"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaHome></FaHome> User Home
                    </NavLink>
                    <NavLink
                        to="/dashboard/reservation"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaCalendarAlt></FaCalendarAlt> Reservation
                    </NavLink>
                    <NavLink
                        to="/dashboard/payment-history"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaWallet></FaWallet> Payment History
                    </NavLink>
                    <NavLink
                        to="/dashboard/my-cart"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaCartPlus></FaCartPlus> My Cart
                        <div className="badge badge-secondary">
                            +{cart ? cart.length : 0}
                        </div>
                    </NavLink>
                    <NavLink
                        to="/dashboard/add-review"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaCommentDots></FaCommentDots> Add Review
                    </NavLink>
                    <NavLink
                        to="/dashboard/my-booking"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaBookmark></FaBookmark> My Booking
                    </NavLink>
                    <div className="divider"></div>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaHome></FaHome> Home
                    </NavLink>

                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaBars></FaBars> Menu
                    </NavLink>

                    <NavLink
                        to="/order/salads"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaShoppingBag></FaShoppingBag> Shop
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white flex items-center gap-2"
                                : "flex items-center gap-2"
                        }
                    >
                        <FaPhoneSquareAlt></FaPhoneSquareAlt> Contact
                    </NavLink>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;