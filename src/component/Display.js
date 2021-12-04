import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col } from 'react-bootstrap';

const Display = () => {
    const { status } = useParams();
    const dispatch = useDispatch();
    const showTasks = useSelector(state => state.showTasks);

    const triggerDone = id => {
        dispatch({ type: 'DONE', payload: id });
        dispatch({ type: 'SET_DISPLAY', payload: status });
    }

    const triggerDelete = id => {        
        dispatch({ type: 'DELETE', payload: id });
        dispatch({ type: 'SET_DISPLAY', payload: status });
    }

    useEffect(()=>{
        dispatch({ type: 'SET_DISPLAY', payload: status });
    },[dispatch,status])

    return (
        <>           
            {
                showTasks.length > 0 ? //if has data
                showTasks.map(task => {
                    return (
                        <Col md={4} key={task.id}>
                            <Card className="shadow m-2" >
                                <Card.Body>
                                    <Card.Title>{task.task}</Card.Title>
                                    <Card.Text>
                                        Start Date: {task.date}
                                    </Card.Text>
                                    
                                    {
                                        status==='done' ? null :  <Card.Link href="#" onClick={()=>triggerDone(task.id)}>Done</Card.Link>
                                    }
                                    
                                    <Card.Link href="#" onClick={()=>triggerDelete(task.id)}>Delete</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
                : //else
                <p className="text-center">{`No ${status} task record!`}</p>
            }
        </>
    )
}

export default Display
