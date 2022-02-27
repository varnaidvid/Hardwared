const handleDropAnim = (type, target) => {
    const icon = document.getElementById(target)
    if (type == 1) {
        icon.animate([
            {transform: "rotate(0deg)"},
            {transform: "rotate(20deg)"},
            {transform: "rotate(40deg)"},
            {transform: "rotate(60deg)"},
            {transform: "rotate(90deg)"},
        ], {
            duration: 250,
            iterations: 1,
        })
        setTimeout(() => {
            icon.classList.replace("fa-angle-right", "fa-angle-down")
        }, 242);
    } else {
        icon.animate([
            {transform: "rotate(0)"},
            {transform: "rotate(-20deg)"},
            {transform: "rotate(-40deg)"},
            {transform: "rotate(-60deg)"},
            {transform: "rotate(-90deg)"},
        ], {
            duration: 250,
            iterations: 1,
        })
        setTimeout(() => {
            icon.classList.replace("fa-angle-down", "fa-angle-right")
        }, 242);
    }
}

export default handleDropAnim