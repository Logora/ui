import React from 'react';
import { SummaryBox } from './SummaryBox';
import { faker } from '@faker-js/faker';

export const DefaultSummaryBox = () => {
    const generateContent = () => {
        const contentItems = [];
        for (let i = 0; i < 5; i++) {
            contentItems.push(faker.lorem.sentence());
        }
        return contentItems;
    };

    return (
        <SummaryBox
            contentItems={generateContent()}
            color={"navy"}
            tag={"Yes"}
        />
    );
}

export const SummaryBoxRed = () => {
    const generateContent = () => {
        const contentItems = [];
        for (let i = 0; i < 5; i++) {
            contentItems.push(faker.lorem.sentence());
        }
        return contentItems;
    };

    return (
        <SummaryBox
            contentItems={generateContent()}
            color={"darksalmon"}
            tag={"No"}
        />
    );
}


export const SummaryBoxWithoutTag = () => {
    const generateContent = () => {
        const contentItems = [];
        for (let i = 0; i < 5; i++) {
            contentItems.push(faker.lorem.sentence());
        }
        return contentItems;
    };
    return (
        <SummaryBox
            contentItems={generateContent()}
        />
    );
};
