import { useSelector } from 'react-redux';
import Input from '../components/common/Input';

export const Form = () => {

    const {loading} =  useSelector(state => state.loading);

    const renderButton = (label, classes, type, onClick )=> {
        return <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={loading}
        >{label}
        </button>
    };

    const renderInput = (name, placeholder, type = 'text', onChange, error, ...rest)=>{
        return (
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                error = {error}
                {...rest}
            />
        )
    };

    return { 
        renderButton,
        renderInput,
    };
}