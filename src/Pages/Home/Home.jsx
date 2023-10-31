import React from 'react';

const Home = () => {
    const click = (e) => {
        console.log(e.currentTarget)
    }
    return (
        <section  onClick={click} capture={true}>
            <div onClick={click} capture={true}>
                <p onClick={click} capture={true}>click
                </p>
            </div>
        </section>
    );
};

export default Home;