function Tasks(props) {
    console.log(props);
    return (
        <div>
            <p>This is my props with tasks: {props.tasks[0].id}</p>
            <p>This is the other props: {props.banana}</p>
        </div>
    );
}

export default Tasks;
