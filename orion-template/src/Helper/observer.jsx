import { useEffect, useRef, useState } from "react";

export function useActiveSection(defaultId) {
    const [active, setActive] = useState(defaultId)
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.dataset.id);
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0,
                rootMargin: "-45% 0px -45% 0px"
            }
        );
        
        const sections = container.querySelectorAll("[data-id]")
        sections.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return {active, containerRef};
}