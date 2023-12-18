import { useState, useEffect } from "preact/hooks";
import { askServer } from "../utils/connector";


export default function Exfind() {
    const [ex, setEx] = useState([{id:0}]) 
    // useEffect(() => {
    //     const loadAllExerciseIds = async () => {
    //         const res = await askServer("/api/exercise-ids", "GET");
    //         setEx(res.map(exercise => exercise.id));
    //     };

    //     loadAllExerciseIds();
    // }, []);

    const getEx = async () => {
        const res = await askServer("/api/ex","GET")
        setEx(res)
    }

    return (
        <>
            {/* <div>
                <label htmlFor="exercise">Exercise Ids</label>
                <select>
                    {ex.map((exercise) => (
                        <option key={exercise.id} value={exercise.id}>
                            {exercise.summary}
                        </option>
                    ))}
                </select>
            </div> */}
            <button onClick={() => getEx()}>Get Exercises</button>
            <div>
                <ol>
                    {ex.map((exercise) => (
                        <li key={exercise.id}>{exercise.content}</li>
                    ))}
                </ol>
            </div>

        </>
    )
}