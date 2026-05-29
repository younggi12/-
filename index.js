let items = document.querySelectorAll(".up, .left, .down")

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
