import { useState } from "react";

const useForm = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleReset = () => {
        setValues(initialValues);
    };

    return { values, handleChange, handleReset };
};

export default useForm;