import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

import menuImg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter((item) => item.category === "offered");
    const desserts = menu.filter((item) => item.category === "dessert");
    const pizzas = menu.filter((item) => item.category === "pizza");
    const salads = menu.filter((item) => item.category === "salad");
    const soups = menu.filter((item) => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>

            {/* Main Cover */}
            <Cover
                img={menuImg}
                title="OUR MENU"
                subTitle="WOULD YOU LIKE TO TRY A DISH?"
            ></Cover>
            {/* Offered Section */}
            <SectionTitle
                heading="Today's offer"
                subHeading="Don't miss"
            ></SectionTitle>
            <MenuCategory
                items={offered}
            ></MenuCategory>

            {/* Dessert section */}
            <MenuCategory
                items={desserts}
                title="dessert"
                img={dessertImg}
                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores!"
            ></MenuCategory>
            {/* Pizzas Section */}
            <MenuCategory
                items={pizzas}
                title="pizzas"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores!"
                img={pizzaImg}
            ></MenuCategory>

            {/* Salad Section */}
            <MenuCategory
                items={salads}
                title="salads"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores!"
                img={saladImg}
            ></MenuCategory>

            {/* Soups Section */}
            <MenuCategory
                items={soups}
                title="soups"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolores!"
                img={soupImg}
            ></MenuCategory>


        </div>
    );
};

export default Menu;