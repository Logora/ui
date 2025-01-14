import React from 'react';
import { ReadMore } from './ReadMore';
import { faker } from '@faker-js/faker';
import { IntlProvider } from 'react-intl';
import { IconProvider } from '@logora/debate.icons.icon_provider';
import { Icon } from "@logora/debate.icons.icon";
import { FormattedMessage } from 'react-intl';
import * as regularIcons from '@logora/debate.icons.regular_icons';

let text = faker.lorem.paragraph(40);
let url = faker.internet.url();

export const LineCountReadMore = () => {
    return (
        <ReadMore 
            content={text}
            lineCount={4}
            readMoreText="Read more"
            readLessText="Read less"
        />
    )
}

export const LineCountWithShortText = () => {
    const shortText = faker.lorem.words(40);

    return (
        <ReadMore 
            content={shortText}
            lineCount={7}
            readMoreText="Read more"
            readLessText="Read less"
        />
    );
};


export const CharCountReadMore = () => {
    return (
        <ReadMore 
            content={text}
            charCount={200}
            readMoreText="Read more"
            readLessText="Read less"
        />
    )
}

export const CharCountWithShortText = () => {
    const shortText = faker.lorem.words(3);

    return (
        <ReadMore 
            content={shortText}
            charCount={400}
            readMoreText="Read more"
            readLessText="Read less"
        />
    );
};

export const ReadMoreWithLink = () => {
    return (
        <ReadMore 
            content={text}
            lineCount={4}
            to={url}
            readMoreText="Read more"
            readLessText="Read less"
            target="_top"
            external
        />
    )
}

export const DisabledReadMore = () => {
    return (
        <ReadMore 
            content={text}
            charCount={250}
            expandable={false}
            readMoreText="Read more"
            readLessText="Read less"
        />
    )
}

export const EmptyContentReadMore = () => {
    return (
        <ReadMore
            content=""
            charCount={200}
            readMoreText="Read more"
            readLessText="Read less"
        />
    )
}

export const SummaryContentBoxReadMore = () => {
    return (
        <IconProvider library={regularIcons}>
            <IntlProvider locale="en">
                <ReadMore
                    content={text}
                    charCount={200}
                    readMoreText={
                        <div>
                            <FormattedMessage id="user_content.summary_content_box.read_more" defaultMessage={"Read more"} />
                            <Icon name="arrow" height={25} width={25} />
                        </div>
                    }
                    readLessText="Read less"
                />
            </IntlProvider>
        </IconProvider>
    )
}