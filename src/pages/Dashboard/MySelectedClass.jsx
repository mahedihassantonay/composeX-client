import useSelectedClass from "../../hooks/useSelectedClass";

const MySelectedClass = () => {
    const [course] = useSelectedClass()
    return (
        <div>
            <h1>my selecyted class: {course.length}</h1>
        </div>
    );
};

export default MySelectedClass;