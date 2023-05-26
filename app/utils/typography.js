// app typography
const tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body: "p",
    "body-small": "p",
    small: "span"
};

const sizes = {
    h1: "text-3xl font-bold sm:text-4xl ease-out duration-300",
    h2: "text-xl font-semibold sm:text-2xl ease-out duration-300",
    h3: "text-lg font-medium sm:text-xl ease-out duration-300",
    h4: "text-md font-normal sm:text-lg ease-out duration-300",
    h5: "text-md font-medium sm:text-sm ease-out duration-300",
    h6: "text-sm font-normal sm:text-sm ease-out duration-300",
    body: "text-lg sm:text-md ease-out duration-300",
    "body-small": "text-md sm:text-sm ease-out duration-300",
    small: "text-sm sm:text-xs ease-out duration-300"
}

export const Typography = ({ variant, children, className, as }) => {
    const sizeClasses = sizes[variant];
    const Tag = as || tags[variant];

    return <Tag className={`${className} ${sizeClasses}`}>{children}</Tag>
}