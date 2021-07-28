import React from 'react';

// Styles
import {
    ListView,
    TodoText,
    TodoDate,
    colors
} from "../styles/appStyles";

import { SwipeListView } from 'react-native-swipe-list-view';

const ListItems = ({todos, setTodos}) => {
    return (
        <SwipeListView
            date={todos}
            renderItem={(data) => {
                return (
                    <ListView>
                        <>
                            <TodoText>{data.item.title}</TodoText>
                            <TodoDate>{data.item.date}</TodoDate>
                        </>
                    </ListView>
                )
            }}
        />
    );
}

export default ListItems;