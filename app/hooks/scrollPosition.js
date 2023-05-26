import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
    // scroll position state
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // update scroll position
        const updatePosition = () => setScrollPosition(window.pageYOffset);

        // add the scroll event listener
        window.addEventListener('scroll', updatePosition);

        // remove event listener when component is unmounted
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
}