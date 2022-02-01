const nullInput = (item) => {
    item.animate([
        {boxShadow: 'none'},
        {boxShadow: '0 0 0 0.15rem rgba(255, 117, 117, 0.8)'},
        {boxShadow: '0 0 0 0.15rem rgba(255, 117, 117, 0.8)'},
        {boxShadow: 'none'},
        {boxShadow: '0 0 0 0.15rem rgba(255, 117, 117, 0.8)'},
        {boxShadow: '0 0 0 0.15rem rgba(255, 117, 117, 0.8)'},
        {boxShadow: 'none'},
    ], {
        duration: 850,
        iterations: 1,
    })
}

export default nullInput