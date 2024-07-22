import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import bakery from "../pictures/cards/bakery.jpg";
import cake from "../pictures/cards/cake.jpg";
import meat from "../pictures/cards/meat.jpg";
import vegetables from "../pictures/cards/vegetables.webp";
import alcohol from "../pictures/cards/alcohol.jpg";
import care from "../pictures/cards/care.jpg";
import CategoryCard from "./CategoryBigCard";
import PaginationDots from "./PaginationDots";

interface CardData {
    image: string;
    title: string;
    description: string;
    route: string;
}

const cardData: CardData[] = [
    {
        image: bakery,
        title: "Пекара",
        description: "Превземете готова нарачка од вашата омилена пекара.",
        route: "/shop/bakery",
    },
    {
        image: cake,
        title: "Торти и колачи",
        description: "Превземете готова нарачка од вашата омилена слаткара.",
        route: "/shop/cakes",
    },
    {
        image: meat,
        title: "Свежо месо и риба",
        description: "Превземете готова нарачка од вашата омилена месара.",
        route: "/shop/meat",
    },
    {
        image: vegetables,
        title: "Свежи зеленчуци",
        description: "Превземете готова нарачка од вашата омилена продавница за зеленчуци.",
        route: "/shop/vegetables",
    },
    {
        image: alcohol,
        title: "Алкохол",
        description: "Превземете готова нарачка од вашата омилена продавница за алкохол.",
        route: "/shop/alcohol",
    },
    {
        image: care,
        title: "Лична нега",
        description: "Превземете готова нарачка од вашата омилена продавница за лична нега.",
        route: "/shop/care",
    },
];

export const BigCards: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const getCurrentCards = () => {
        const end = currentIndex + 3;
        if (end <= cardData.length) {
            return cardData.slice(currentIndex, end);
        } else {
            return [...cardData.slice(currentIndex), ...cardData.slice(0, end - cardData.length)];
        }
    };

    return (
        <div>
            <Grid container spacing={8} justifyContent="center" paddingTop={'50px'} >
                {getCurrentCards().map((card, index) => (
                    <Grid item xs={12} sm={6} md={'auto'} key={index}  direction="row"
                          justifyContent="center"
                          alignItems="center">
                        <CategoryCard
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            route={card.route}
                        />
                    </Grid>
                ))}
            </Grid>
            <PaginationDots total={cardData.length} currentIndex={currentIndex} />
        </div>
    );
};
