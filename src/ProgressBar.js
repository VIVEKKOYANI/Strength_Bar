function ProgressBar(props) {

    return (
        <div className=''>
            <span>{props.title}</span>
            <div className='progressboxline'>
                <div className='slot'></div>
                <div className='slot'></div>
                <div className='slot'></div>
            </div>
        </div>
    );
}

export default ProgressBar;