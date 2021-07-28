import React from 'react';
import {Modal} from 'react-native';

import{
    ModalButton,
    ModalContainer,
    ModalView,
    StyledInput,
    ModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,
    colors
} from '../styles/appStyles';

import { AntDesign } from '@expo/vector-icons';

const InputModal = () => {
    return (
        <>
            <ModalButton onPress={() => {}}>
                <AntDesign name="plus" size={30} color={colors.secondary}/>
            </ModalButton>
        </>
    );
}

export default InputModal;