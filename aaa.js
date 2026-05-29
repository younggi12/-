let items = document.querySelectorAll(".right2, .scale2")

    const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(item) {
        if (item.isIntersecting) {
             item.target.classList.add('on')
        }
    })
}, {
    threshold : 0.3
})

items.forEach(function(box){
    observer.observe(box)
})
