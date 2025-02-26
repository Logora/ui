import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { IconProvider } from '@logora/debate.icons.icon_provider';
import { ConfigProvider } from '@logora/debate.data.config_provider';
import { dataProvider, DataProviderContext } from '@logora/debate.data.data_provider';
import { AuthContext } from '@logora/debate.auth.use_auth';
import { ModalProvider } from '@logora/debate.dialog.modal';
import { ListProvider } from '@logora/debate.list.list_provider';
import { ToastProvider } from '@logora/debate.dialog.toast_provider';
import * as regularIcons from '@logora/debate.icons.regular_icons';
import { faker } from '@faker-js/faker';
import { SuggestionInput } from './SuggestionInput';
import { InputProvider } from '@logora/debate.input.input_provider';

const currentUser = {
    id: faker.datatype.number(),
    full_name: faker.name.fullName(),
    image_url: faker.image.avatar(),
    points: faker.datatype.number()
};

const httpClient = {
    post: () => {
        return new Promise((resolve) => {
            resolve({ data: { success: true, data: {} } });
        });
    }
};

const data = dataProvider(httpClient, "https://mock.example.api");

export const DefaultSuggestionInput = () => {
    return (
        <BrowserRouter>
            <ConfigProvider >
                <IconProvider library={regularIcons} >
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: true }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <InputProvider>
                                                <SuggestionInput disabled={false} />
                                            </InputProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export const DisabledSuggestionInput = () => {
    return (
        <BrowserRouter>
            <ConfigProvider >
                <IconProvider library={regularIcons} >
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: true }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <InputProvider>
                                                <SuggestionInput disabled={true} />
                                            </InputProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export const SuggestionInputMaxLength = () => {
    return (
        <BrowserRouter>
            <ConfigProvider >
                <IconProvider library={regularIcons} >
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: true }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <InputProvider>
                                                <SuggestionInput disabled={true} maxLength={30} />
                                            </InputProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};
