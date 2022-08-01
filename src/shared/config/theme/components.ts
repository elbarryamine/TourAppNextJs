export default {
    Button: {
        baseStyle: {},
        variants: {
            primary: {
                bg: "primary",
                color: "invert-text",
            },
            primaryOutline: {
                bg: "transparent",
                border: "2px solid",
                borderColor: "primary",
                color: "primary",
            },
            primaryGhost: {
                bg: "transparent",
                color: "primary",
            },
        },
    },
    Heading: {
        variants: {
            subheader: {
                fontSize: "1.4rem",
            },
            header: {
                fontSize: "1.8rem",
                fontWeight: 800,
            },
        },
    },
    Text: {
        baseStyle: {
            fontSize: "1rem",
        },
        variants: {
            micro: {
                fontSize: "0.7rem",
            },
            tiny: {
                fontSize: "0.8rem",
            },
            small: {
                fontSize: "0.9rem",
            },
            body: {
                fontSize: "1rem",
            },
            display: {
                fontSize: "1.2rem",
            },
            paragraph: {
                fontSize: "0.95rem",
                fontWeight: 100,
                letterSpacing: -0.5,
            },
            span: {
                color: "primary",
                fontSize: "0.95rem",
                fontWeight: 100,
                letterSpacing: -0.5,
                pos: "relative",
                borderRadius: "5px",
                bg: "primary-opacity",
                "&::before": { content: "'  '" },
                "&::after": { content: "'  '" },
            },
        },
    },
};
