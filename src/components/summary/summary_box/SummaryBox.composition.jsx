import React from 'react';
import { SummaryBox } from './SummaryBox';
import { faker } from '@faker-js/faker';
import styles from './SummaryBoxComposition.module.scss';

export const DefaultSummaryBox = () => {
    const generateContent = () => {
        const summaryItems = [];
        for (let i = 0; i < 5; i++) {
            summaryItems.push(faker.lorem.sentence());
        }
        return summaryItems;
    };

    return (
        <SummaryBox
            summaryItems={generateContent()}
            tag={"Yes"}
        />
    );
}

export const SummaryBoxRed = () => {
    const generateContent = () => {
        const summaryItems = [];
        for (let i = 0; i < 5; i++) {
            summaryItems.push(faker.lorem.sentence());
        }
        return summaryItems;
    };

    return (
        <SummaryBox
            summaryItems={generateContent()}
            tagClassName={styles.darksalmon}
            tag={"No"}
        />
    );
}


export const SummaryBoxWithoutTag = () => {
    const generateContent = () => {
        const summaryItems = [];
        for (let i = 0; i < 5; i++) {
            summaryItems.push(faker.lorem.sentence());
        }
        return summaryItems;
    };
    return (
        <SummaryBox
            summaryItems={generateContent()}
        />
    );
};

export const SummaryBoxEmpty = () => {
    return (
        <SummaryBox
            summaryItems={[]}
            emptySummaryText="No elements found"
        />
    );
};

export const SummaryBoxEmptyWithTag = () => {
    return (
        <SummaryBox
            summaryItems={[]}
            emptySummaryText="No elements found"
            tag={"tag"}

        />
    );
};
