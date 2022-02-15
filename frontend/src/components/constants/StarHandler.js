import React from "react"

const StarHandler = (props) => {
    if (props.type == 1){
        return (
            <>
                <img src="/static/images/svg/half-star.svg" height="15"/>
                <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                <img src="/static/images/svg/unfilled-star.svg" height="15"/>
            </>
        )
    } else if (props.type == 2){
        return (
            <>
                <img src="/static/images/svg/filled-star.svg" height="15"/>
                <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                <img src="/static/images/svg/unfilled-star.svg" height="15"/>
                <img src="/static/images/svg/unfilled-star.svg" height="15"/>
            </>
        )
    } else if (props.type == 3){
        return (
        <>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/half-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
        </>
        )

    } else if (props.type == 4){
        return (
        <>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
        </>
        )

    } else if (props.type == 5){
        return (
        <>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/half-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
        </>
        )

    } else if (props.type == 6){
        return (
        <>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
        </>
        )

    } else if (props.type == 7){
        return (
        <>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/half-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
        </>
        )

    } else if (props.type == 8){
        return (
        <>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/unfilled-star.svg" height="15"/>
        </>
        )

    } else if (props.type == 9){
        return (
        <>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/half-star.svg" height="15"/>
        </>
        )

    } else if (props.type == 10){
        return (
        <>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
            <img src="/static/images/svg/filled-star.svg" height="15"/>
        </>
        )

    }
}

export default StarHandler