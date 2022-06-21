window.addEventListener('scroll', function() {
    let scroll = document.querySelector('scroliTop')
        scroll.classList.toggle('active',this.window.scrollY > 450)
})
function backTop(){
    window.screenTop({
        top:0,
        bahavior:'snooth'
    })
}
export default backTop;