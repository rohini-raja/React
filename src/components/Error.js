import {useRouteError} from 'react-router-dom';
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1> Oh No!</h1>
            <h2>Something went wrong! Please Check!</h2>
            <h3>{err.status} {err.statusText}</h3>
        </div>
    );
};

export default Error;