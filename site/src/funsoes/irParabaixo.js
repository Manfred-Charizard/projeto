window.addEventListener('scroll', function() {
    let scroll = document.querySelector('scrolibaixo')
        scroll.classList.toggle('active',this.window.scrollY > 450)
})
function backBaixo(){
    window.screenbaixo({
        baixo:1000,
        bahavior:'snooth'
    })
}
export default backBaixo;