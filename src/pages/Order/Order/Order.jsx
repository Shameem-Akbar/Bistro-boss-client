import React, { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover/Cover';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../hooks/useMenu';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ["salads", "pizzas", "soups", "dessert", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const drinks = menu.filter((item) => item.category === "drinks");
    const desserts = menu.filter((item) => item.category === "dessert");
    const pizzas = menu.filter((item) => item.category === "pizza");
    const salads = menu.filter((item) => item.category === "salad");
    const soups = menu.filter((item) => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Order Food | Bistro Boss</title>
            </Helmet>
            <Cover
                img={orderCoverImg}
                title="Order Food"
                subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quisquam. Commodi hic harum ducimus porro"
            ></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="md:mx-44 my-8">
                <TabList className="text-center mb-6 border-b-2 text-lg">
                    <Tab>Salads</Tab>
                    <Tab>Pizzas</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab item={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={drinks}></OrderTab>
                </TabPanel>

            </Tabs>

        </div >
    );
};

export default Order;