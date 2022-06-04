import React, {useState, useEffect} from "react";


function FadeIn(props) {
    const [isVisible, setVisible] = useState(false);

    const domRef = React.useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => (entry.isIntersecting && setVisible(true)));
        });

        const {current}  = domRef;

        observer.observe(current);

        return () => observer.unobserve(current);
    }, []);

    return (
        <div ref={domRef} className={`reveal ${isVisible ? 'active' : ''}`}>
            {props.children}
        </div>
    )
}

export default FadeIn;