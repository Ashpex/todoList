import React, {useState} from "react";

//components
import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from './InputModal'
import { Modal } from "react-native";

const Home = () => {
    
    const initialTodos = [{
        title: "This is a task",
        date: "Wed, 28 Jul 2021 15:51:10 GMT",
        key: "1"
    },{
        title: "This is another task",
        date: "Wed, 28 Jul 2021 15:52:10 GMT",
        key: "2"
    },{
        title: "This is the last task",
        date: "Wed, 28 Jul 2021 15:53:10 GMT",
        key: "3"
    }]

    const [todos, setTodos] = useState(initialTodos);

    // handle todos
    const handleClearTodos = () => {
        setTodos([]);
    }


    // Modal visiblity

    const [modalVisible, setModalVisible] = useState(false);
    const [todoInputValue, setTodoInputValue] = useSate();

    return (
        <>
            <Header handleClearTodos={handleClearTodos} />
            <ListItems 
                todos={todos}
                setTodos={setTodos}
            />

            <InputModal 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                todoInputValue={todoInputValue}
                setTodoInputValue={setTodoInputValue}
            />
        </>
    );
}

export default Home;

