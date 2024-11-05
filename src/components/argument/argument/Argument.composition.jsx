import React from 'react';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from '@logora/debate.data.config_provider';
import { BrowserRouter } from 'react-router-dom';
import { Location } from '@logora/debate.util.location';
import { dataProvider, DataProviderContext } from '@logora/debate.data.data_provider';
import { AuthContext } from '@logora/debate.auth.use_auth';
import { ModalProvider } from '@logora/debate.dialog.modal';
import { ListProvider } from '@logora/debate.list.list_provider';
import { ToastProvider } from '@logora/debate.dialog.toast_provider';
import { VoteProvider } from '@logora/debate.vote.vote_provider';
import { InputProvider } from '@logora/debate.input.input_provider';
import { IdProvider } from "react-use-id-hook";
import { Argument } from './Argument';
import { IconProvider } from '@logora/debate.icons.icon_provider';
import { ResponsiveProvider } from '@logora/debate.hooks.use_responsive';
import * as regularIcons from '@logora/debate.icons.regular_icons';
import { faker } from '@faker-js/faker';

// Mock data and constants
const routes = {
    userShowLocation: new Location('espace-debat/user/:userSlug', { userSlug: '' })
};

const vote = {
    id: faker.datatype.number(),
    voteable_type: faker.lorem.word(),
    voteable_id: faker.datatype.number(),
    user_id: faker.datatype.number()
};

const httpClient = {
    get: () => Promise.resolve({ data: { success: true, data: [argumentReply] } }),
    post: (url, data, config) => {
        return new Promise((resolve, reject) => {
            let response;
            if (url.includes('vote')) {
                response = { data: { success: true, data: { resource: vote } } };
            } else if (url.includes('messages')) {
                response = { data: { success: true, data: { resource: argumentReply } } };
            } else {
                reject(new Error("Unknown endpoint"));
                return;
            }
            resolve(response);
        });
    },
    patch: () => null,
    delete: () => Promise.resolve({ data: { success: true, data: {} } })
};

const currentUser = { id: vote.user_id };
const data = dataProvider(httpClient, "https://mock.example.api");

const generateArgument = (overrides) => ({
    id: 414,
    content: faker.lorem.sentences(3),
    upvotes: 0,
    group_id: 417,
    is_reply: false,
    created_at: faker.date.recent(),
    is_deleted: false,
    score: 50,
    author: {
        image_url: faker.image.avatar(),
        full_name: faker.name.fullName(),
        hash_id: faker.lorem.slug(),
        slug: faker.lorem.slug(),
        points: 1320,
        last_activity: new Date(),
        description: faker.name.jobTitle()
    },
    position: {
        id: 1,
        name: "Yes",
        language: "en",
        translation_entries: []
    },
    ...overrides
});

const argument = generateArgument();
const longArgument = generateArgument({ content: faker.lorem.sentences(15) })
const argumentReply = generateArgument({ id: 415, is_reply: true, reply_to_id: argument.id });
const argumentDeleted = generateArgument({ id: 416, is_deleted: true });
const argumentWithReplies = generateArgument({
    id: 414,
    content: faker.lorem.sentences(2),
    number_replies: 3,
    replies_authors: Array.from({ length: 3 }).map(() => ({
        image_url: faker.image.avatar(),
        full_name: faker.name.fullName(),
    }))
});

const debatePositions = [
    { id: 1, name: "Yes", language: "en", translation_entries: [] },
    { id: 2, name: "No", language: "en", translation_entries: [] }
];

const debateName = faker.lorem.sentence(5);

const Providers = ({ children }) => (
    <BrowserRouter>
        <ConfigProvider routes={{ ...routes }} config={{ translation: { enable: false } }}>
            <DataProviderContext.Provider value={{ dataProvider: data }}>
                <AuthContext.Provider value={{ currentUser, isLoggedIn: true }}>
                    <ResponsiveProvider>
                        <ModalProvider>
                            <ListProvider>
                                <ToastProvider>
                                    <VoteProvider>
                                        <IdProvider>
                                            <InputProvider>
                                                <IconProvider library={regularIcons}>
                                                    <IntlProvider locale="en">
                                                        {children}
                                                    </IntlProvider>
                                                </IconProvider>
                                            </InputProvider>
                                        </IdProvider>
                                    </VoteProvider>
                                </ToastProvider>
                            </ListProvider>
                        </ModalProvider>
                    </ResponsiveProvider>
                </AuthContext.Provider>
            </DataProviderContext.Provider>
        </ConfigProvider>
    </BrowserRouter>
);

// Component exports
export const DefaultArgument = () => (
    <div style={{ width: "400px", height: "240px" }}>
        <Providers>
            <Argument
                argument={argument}
                debatePositions={debatePositions}
                debateName={debateName}
            />
        </Providers>
    </div>
);

export const ExpandableArgument = () => (
    <div style={{ width: "400px", height: "240px" }}>
        <Providers>
            <Argument
                argument={longArgument}
                debatePositions={debatePositions}
                debateName={debateName}
                expandable
            />
        </Providers>
    </div>
);

export const ExpandedArgument = () => (
    <div style={{ width: "400px", height: "240px" }}>
        <Providers>
            <Argument
                argument={longArgument}
                debatePositions={debatePositions}
                debateName={debateName}
                expandable={false}
            />
        </Providers>
    </div>
);

export const Comment = () => (
    <div style={{ width: "400px", height: "230px" }}>
        <Providers>
            <Argument
                argument={argument}
                debatePositions={debatePositions}
                debateName={debateName}
                isComment
            />
        </Providers>
    </div>
);

export const ArgumentDisabledLinks = () => (
    <div style={{ width: "400px", height: "230px" }}>
        <Providers>
            <Argument
                argument={argument}
                debatePositions={debatePositions}
                debateName={debateName}
                disableLinks={true}
            />
        </Providers>
    </div>
);

export const ArgumentReply = () => (
    <div style={{ width: "400px", height: "230px" }}>
        <Providers>
            <Argument
                argument={argumentReply}
                debatePositions={debatePositions}
                debateName={debateName}
                parentArgument={argument}
                nestingLevel={1}
            />
        </Providers>
    </div>
);

export const DisabledArgument = () => (
    <div style={{ width: "400px", height: "230px" }}>
        <Providers>
            <Argument
                argument={argument}
                debatePositions={debatePositions}
                debateName={debateName}
                disabled
            />
        </Providers>
    </div>
);

export const DeletedArgument = () => (
    <div style={{ width: "400px" }}>
        <Providers>
            <Argument
                argument={argumentDeleted}
                debatePositions={debatePositions}
                debateName={debateName}
            />
        </Providers>
    </div>
);

export const ArgumentWithoutFooter = () => (
    <div style={{ width: "400px", height: "240px" }}>
        <Providers>
            <Argument
                argument={argument}
                debateName={debateName}
                hideFooter={true}
            />
        </Providers>
    </div>
);

export const ArgumentWithReplies = () => (
    <div style={{ width: "400px", height: "260px" }}>
        <Providers>
            <Argument
                argument={argumentWithReplies}
                debatePositions={debatePositions}
                debateName={debateName}
            />
        </Providers>
    </div>
);

export const ArgumentWithArgumentReplies = () => (
    <div style={{ width: "400px", height: "260px" }}>
        <Providers>
            <Argument
                argument={argument}
                debatePositions={debatePositions}
                debateName={debateName}
                argumentReplies={[argumentReply]}
            />
        </Providers>
    </div>
);
