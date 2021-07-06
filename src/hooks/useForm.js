import Input from '../components/common/Input';

export const Form = () => {

    const renderButton = (label, classes, type, onClick )=> {
        return <button
            type={type}
            // className={`btn btn-${btnForm} btn-${btnClass} m-2`}
            className={classes}
            onClick={onClick}
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