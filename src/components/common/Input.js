import React from 'react';

const Input = ({ error, ...rest }) => {

    return (
        <div className="form-group m-2">
            <input
                {...rest}
                className="form-control form-login"
                
                />
            
            {error && <div className="alert alert-danger">{error}</div>}

        </div>
    )
}
export default Input;



