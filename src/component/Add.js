import React,{useEffect} from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uid } from 'uuid';
import Success from './Success';
import Error from './Error';

const Add = () => {
    const dispatch = useDispatch();
    const taskDate = useSelector(state => state.taskDate);
    const taskEntry = useSelector(state => state.taskEntry);
    const errorMsg = useSelector(state => state.errorMsg);
    const successMsg = useSelector(state => state.successMsg);

    const triggerChange = e => {
        if (e.target.name === 'date') {
            dispatch({ type: 'BIND_DATE_ENTRY', payload: e.target.value });
        } else {
            dispatch({ type: 'BIND_TASK_ENTRY', payload: e.target.value });
        }                
    }

    const triggerSave = () => {
        if (taskEntry && taskDate) {
            let newEntry = { id: uid(), date: taskDate, task: taskEntry, status: 'pending' };
            dispatch({ type: 'ADD_TASK', payload: newEntry });
        } else {
            dispatch({ type: 'SET_ERROR', payload: 'Error: All fields are required!' });
        }        
    }

    useEffect(()=>{
        dispatch({type: 'BEFORE_ADD'});
    },[dispatch])

    return (
        <div>
            <Col xs={12} md={8} className="shadow p-3 offset-md-2">
                {
                    errorMsg.length > 0 ? <Error /> : null //display Error Component on error.
                }
                {
                    successMsg.length > 0 ? <Success /> : null //display Success Component on success.
                }
                
                <Row >
                    <Col md={4} className="my-2">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control name="date" type="date" onChange={triggerChange} value={taskDate} />
                    </Col>
                    <Col md={8} className="my-2">
                        <Form.Label>Task</Form.Label>
                        <Form.Control name="task" as="textarea" rows={1} onChange={triggerChange} value={taskEntry}  />
                    </Col>                
                </Row>
                <Row>
                    <Col className="my-2 text-end">
                        <Button onClick={triggerSave}>Save</Button>
                    </Col>
                </Row>

            </Col>
        </div>
    )
}

export default Add
