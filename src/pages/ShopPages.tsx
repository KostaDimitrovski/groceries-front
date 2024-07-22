import React from "react";
import ShopCategory from "../components/ShopCategory";

const Bakery = () => {
    return <ShopCategory category="BAKERY"  logo ="🍞"/>;
};

const Cakes = () => {
    return <ShopCategory category="CHOCOLATE"  logo ="🍫" />;
};

const Alcohol = () => {
    return <ShopCategory category="ALCOHOL"  logo ="🍷" />;
};

const MeatFish = () => {
    return <ShopCategory category="MEAT"  logo ="🥩" />;
};

const Care = () => {
    return <ShopCategory category={"OTHER"}   logo ="🧴"/>;
}
const Vegetables = () => {
    //todo: beverage
    return <ShopCategory category={"BEVERAGE"} logo ="🧃"/>;
}

export { Bakery, Cakes, Alcohol, MeatFish, Care, Vegetables };
